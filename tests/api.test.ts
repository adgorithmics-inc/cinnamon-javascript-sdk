import { codes } from '@adgorithmics/graphql-errors';
import { Cinnamon } from '../src';
import fetch from 'cross-fetch';

const makeAPIResponse = (response: unknown) =>
    Promise.resolve({ json: () => response });

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
        const cinnamon = new Cinnamon({ url: 'url' });

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
        const cinnamon = new Cinnamon({ url: 'url' });

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
        const cinnamon = new Cinnamon({ url: 'url' });

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
        const cinnamon = new Cinnamon({ url: 'url' });

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
        const cinnamon = new Cinnamon({ url: 'url' });

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

    it('should throw a combined cinnamon error for all errors in the response', async () => {
        const cinnamon = new Cinnamon({ url: 'url' });

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
        const cinnamon = new Cinnamon({ url: 'url' });

        const raw = {
            data: { some: 'data' },
            errors: [{ message: 'error 1' }, { message: 'error 2' }],
        };

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse(raw));

        await cinnamon.api({ query: '' }).catch(error => {
            expect(error.raw).toEqual(raw);
        });
    });

    it('should throw a invalid response error if there is no data attribute in the response', async () => {
        const cinnamon = new Cinnamon({ url: 'url' });

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse({ some: 'wrong response' }));

        await expect(cinnamon.api({ query: '' })).rejects.toThrow(
            'Invalid server response: {"some":"wrong response"}',
        );
    });

    it('should return the server response when there are no errors', async () => {
        const cinnamon = new Cinnamon({ url: 'url' });

        const response = { data: 'hello world' };

        (fetch as jest.MockedFunction<
            () => Promise<unknown>
        >).mockResolvedValueOnce(makeAPIResponse(response));

        expect(await cinnamon.api({ query: '' })).toEqual(response);
    });
});
