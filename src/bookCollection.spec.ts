ESSAIE 1
describe("BookCollection Advanced - Price API ", () => {

    jest.mock("../BookPriceService");

    let bookCollection: IBookCollectionAdvanced
    let book1: IBook
    beforeEach(() => {

        bookCollection = new BookCollectionAdvanced2()
        book1 = {
            title: "Les Misérables",
            author: "Victor Hugo",
        }


    })

    jest.spyOn(price,"getAveragePrice").mockReturnValueOnce(12)

    it("should use Price API - Method #1", () => {
        const price_ = BookCollection.getAveragePrice(book1.title, 'FR')
    }))
}



ESSAIE 2 


jest.mock('../BookPriceService');

let bookCollection: IBookCollectionAdvanced;
let book1: IBook;

beforeEach(() => {
    bookCollection = new BookCollectionAdvanced2();
    book1 = {
        title: 'Les Misérables',
        author: 'Victor Hugo',
    };
});

describe('BookCollection Advanced - Price API', () => {
    it('should use Price API - Method #1', () => {
        const mockGetAveragePrice = jest.spyOn(price, 'getAveragePrice').mockReturnValueOnce(12);

        const averagePrice = bookCollection.getAveragePrice(book1.title, 'FR');

        expect(mockGetAveragePrice).toHaveBeenCalledWith(book1.title, 'FR');
        expect(averagePrice).toBe(12);
        mockGetAveragePrice.mockRestore(); // Restaure la fonction d'origine après le test
    });
});