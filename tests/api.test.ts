import { codes } from '@adgorithmics/graphql-errors';
import { Cinnamon, CinnamonError } from '../src';
import fetch from 'cross-fetch';

const makeAPIResponse = (response: unknown) =>
    Promise.resolve({ json: () => response });

const retrySleepTime = 0;

jest.mock('cross-fetch', () => ({
    default: jest.fn(() => makeAPIResponse({ data: {} })),
}));

jest.mock('lodash.get', () => ({
    default: jest.requireActual('lodash.get'),
}));

describe('API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call fetch with the correct arguments', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        await cinnamon.api({ query: '' });

        expect(fetch).toHaveBeenCalledWith('url', {
            body: '{"query":"","variables":{}}',
            headers: {
                accept: 'application/json',
                authorization: '',
                'content-type': 'application/json',
            },
            method: 'POST',
        });
    });

    it('should pass the active token as authorization header', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        cinnamon.setToken('token');
        await cinnamon.api({ query: '' });

        expect(fetch).toHaveBeenCalledWith('url', {
            body: '{"query":"","variables":{}}',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer token',
                'content-type': 'application/json',
            },
            method: 'POST',
        });
    });

    it('should overwrite the active token with a token thats passed as an argument', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        cinnamon.setToken('token');
        await cinnamon.api({ query: '', token: 'new token' });

        expect(fetch).toHaveBeenCalledWith('url', {
            body: '{"query":"","variables":{}}',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer new token',
                'content-type': 'application/json',
            },
            method: 'POST',
        });
    });

    it('should pass variables in the body', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        await cinnamon.api({ query: '', variables: { foo: 'bar' } });

        expect(fetch).toHaveBeenCalledWith('url', {
            body: '{"query":"","variables":{"foo":"bar"}}',
            headers: {
                accept: 'application/json',
                authorization: '',
                'content-type': 'application/json',
            },
            method: 'POST',
        });
    });

    it('should refresh the token if it is expired and retry the failed call', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ extensions: { code: codes.TOKEN_EXPIRED } }],
            }),
        );

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                data: {
                    refreshLogin: {
                        token: 'new token',
                        refreshToken: 'new refresh token',
                    },
                },
            }),
        );

        cinnamon.setRefreshToken('refresh token');
        await cinnamon.api({ query: 'my query' });

        expect(
            (fetch as jest.MockedFunction<() => Promise<unknown>>).mock.calls,
        ).toEqual([
            [
                'url',
                {
                    body: '{"query":"my query","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body:
                        '{"query":"mutation($input: RefreshTokenInput!) {\\n                    refreshLogin(input: $input) {\\n                        expiryDate\\n                        token\\n                        refreshToken\\n                    }\\n                }","variables":{"input":{"refreshToken":"refresh token"}}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: 'Bearer new token',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
        ]);
    });

    it('should handle multiple expired token requests at the same time', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ extensions: { code: codes.TOKEN_EXPIRED } }],
            }),
        );

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ extensions: { code: codes.TOKEN_EXPIRED } }],
            }),
        );

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                data: {
                    refreshLogin: {
                        token: 'new token',
                        refreshToken: 'new refresh token',
                    },
                },
            }),
        );

        cinnamon.setRefreshToken('refresh token');

        await Promise.all([
            cinnamon.api({ query: 'my query 1' }),
            cinnamon.api({ query: 'my query 2' }),
        ]);

        expect(
            (fetch as jest.MockedFunction<() => Promise<unknown>>).mock.calls,
        ).toEqual([
            [
                'url',
                {
                    body: '{"query":"my query 1","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query 2","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body:
                        '{"query":"mutation($input: RefreshTokenInput!) {\\n                    refreshLogin(input: $input) {\\n                        expiryDate\\n                        token\\n                        refreshToken\\n                    }\\n                }","variables":{"input":{"refreshToken":"refresh token"}}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query 1","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: 'Bearer new token',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query 2","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: 'Bearer new token',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
        ]);
    });

    it('should hold calls while refresh token is in progress', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ extensions: { code: codes.TOKEN_EXPIRED } }],
            }),
        );

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            new Promise(resolve => {
                setImmediate(() => {
                    resolve({
                        json: () => ({
                            data: {
                                refreshLogin: {
                                    token: 'new token',
                                    refreshToken: 'new refresh token',
                                },
                            },
                        }),
                    });
                });
            }),
        );

        cinnamon.setRefreshToken('refresh token');

        const firstCall = cinnamon.api({ query: 'my query 1' });
        await new Promise(resolve => process.nextTick(() => resolve()));
        const secondCall = cinnamon.api({ query: 'my query 2' });

        await firstCall;
        await secondCall;

        expect(
            (fetch as jest.MockedFunction<() => Promise<unknown>>).mock.calls,
        ).toEqual([
            [
                'url',
                {
                    body: '{"query":"my query 1","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body:
                        '{"query":"mutation($input: RefreshTokenInput!) {\\n                    refreshLogin(input: $input) {\\n                        expiryDate\\n                        token\\n                        refreshToken\\n                    }\\n                }","variables":{"input":{"refreshToken":"refresh token"}}}',
                    headers: {
                        accept: 'application/json',
                        authorization: '',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query 2","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: 'Bearer new token',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
            [
                'url',
                {
                    body: '{"query":"my query 1","variables":{}}',
                    headers: {
                        accept: 'application/json',
                        authorization: 'Bearer new token',
                        'content-type': 'application/json',
                    },
                    method: 'POST',
                },
            ],
        ]);
    });

    it('should throw a combined cinnamon error for all errors in the response', async () => {
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook: () => false,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ message: 'error 1' }, { message: 'error 2' }],
            }),
        );

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'error 1\nerror 2',
        );
    });

    it('should have the raw data in the error object', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        const raw = {
            data: { some: 'data' },
            errors: [{ message: 'error 1' }, { message: 'error 2' }],
        };

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse(raw));

        await cinnamon.api({ query: '' }).catch(error => {
            expect(error.raw).toEqual(raw);
            expect(error.data.raw).toEqual(raw);
        });
    });

    it('should throw a invalid response error if there is no data attribute in the response', async () => {
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook: () => false,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse({ some: 'wrong response' }));

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'Invalid server response: {"some":"wrong response"}',
        );
    });

    it('should return the server response when there are no errors', async () => {
        const cinnamon = new Cinnamon({ url: 'url', retrySleepTime });

        const response = { data: 'hello world' };

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse(response));

        expect(await cinnamon.api({ query: '' })).toEqual(response);
    });

    it('should retry errors', async () => {
        const retryHook = jest.fn(() => true);
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValue(
            makeAPIResponse({
                errors: [{ message: 'error 1' }, { message: 'error 2' }],
            }),
        );

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'error 1\nerror 2',
        );

        expect(retryHook).toHaveBeenCalledTimes(3);
        expect(retryHook).toHaveBeenNthCalledWith(
            1,
            new CinnamonError('error 1\nerror 2'),
            0,
        );
        expect(retryHook).toHaveBeenNthCalledWith(
            2,
            new CinnamonError('error 1\nerror 2'),
            1,
        );
        expect(retryHook).toHaveBeenNthCalledWith(
            3,
            new CinnamonError('error 1\nerror 2'),
            2,
        );
        expect(fetch).toHaveBeenCalledTimes(4);
    });

    it('should not retry unretryable errors', async () => {
        const retryHook = jest.fn(() => true);
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [
                    {
                        message: 'error',
                        extensions: { code: codes.INPUT_INVALID },
                    },
                ],
            }),
        );

        await expect(cinnamon.api({ query: '' })).rejects.toThrow('error');

        expect(retryHook).not.toHaveBeenCalled();
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should not retry if retryHook returns false', async () => {
        const retryHook = jest.fn(() => false);
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(
            makeAPIResponse({
                errors: [{ message: 'error 1' }, { message: 'error 2' }],
            }),
        );

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'error 1\nerror 2',
        );

        expect(retryHook).toHaveBeenCalledTimes(1);
        expect(retryHook).toHaveBeenNthCalledWith(
            1,
            new CinnamonError('error 1\nerror 2'),
            0,
        );
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should retry errors as often as set in maxRetry', async () => {
        const retryHook = jest.fn(() => true);
        const maxRetry = 2;
        const cinnamon = new Cinnamon({
            url: 'url',
            retryHook,
            maxRetry,
            retrySleepTime,
        });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValue(
            makeAPIResponse({
                errors: [{ message: 'error 1' }, { message: 'error 2' }],
            }),
        );

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'error 1\nerror 2',
        );

        expect(retryHook).toHaveBeenCalledTimes(maxRetry);
        expect(fetch).toHaveBeenCalledTimes(3);
    });
});
