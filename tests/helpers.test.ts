import { CinnamonError } from '../src';

describe('helpers', () => {
    describe('CinnamonError', () => {
        it('should throw a simple error', () => {
            expect(() => {
                throw new CinnamonError('foo');
            }).toThrow('foo');
        });

        it('should save the raw data', () => {
            const error = new CinnamonError('foo', {
                errors: [{ message: 'foo' }],
            });

            expect(error.data).toEqual({
                raw: {
                    errors: [{ message: 'foo' }],
                },
            });
        });

        it('should be stackable', () => {
            expect(() => {
                throw new CinnamonError(new CinnamonError('foo'));
            }).toThrow('foo');
        });
    });
});
