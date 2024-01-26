
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
    )}})


    
