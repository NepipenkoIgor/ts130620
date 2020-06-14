import { average } from './functions';

describe('Test Functions', () => {
    it('Average should work', () => {
        expect(average(2, '2')).toEqual('Average is 2');
        expect(average('4', 2)).toEqual('Average is 3');
        expect(average(4, 2, 3)).toEqual('Average is 3');
    })
})
