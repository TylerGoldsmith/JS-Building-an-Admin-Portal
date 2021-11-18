const book_url ="http://localhost:3001/listBooks"
const update_url ="http://localhost:3001/updateBooks"
const root = document.querySelector("#root")

async function getBooks() {
    let response = await fetch(books_url)
    let data = await response.json()
    data.forEach(renderBook)
}

function renderBook(book) {
    let li = document.createElement("li")
        li.textContent = book.title
    let inputQuantity = document.createElement("input")
        quantityInput.value = book.quantity
    let saveButton = document.createElement("button")
        saveButton.textContent = "Save"

    root.append(li, input, saveButton)

    saveButton.addEventListener('click', () => {
        fetch(update_url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

}

getBooks();