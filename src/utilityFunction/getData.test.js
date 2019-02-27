const axios = require('axios');
const getData = require('./getData');

const mockPosts = [
  {
    id: 1,
    formName: 'Code Academy 2019 FeedBack',
    createdAt: '2019-02-27T08:51:04.272Z',
    updatedAt: '2019-02-27T08:51:04.272Z',
  },
];

describe('getData () :', () => {
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => Promise.resolve(mockPosts));
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should return an array', async (done) => {
    const blogData = await getData('http://localhost:8080/formNames');
    expect(blogData).toEqual(mockPosts);
    done();
  });
});
