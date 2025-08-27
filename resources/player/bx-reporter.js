class Reporter {
    constructor() {
        this.ajaxUrl = bxreport.ajaxurl
        this.i18n = bxreport.i18n
    }

    ___(key) {
        return this.i18n[key] || key
    }

    async removeAll() {
        try {
        const formData = new FormData()
        formData.append("action", "bxajax_removeall")
        const response = await fetch(this.ajaxUrl, {
            method: "POST",
            body: formData,
        })
        const data = await response.json()
        if (data.success) {
            document.querySelector("table.rp tbody").innerHTML =
            '<tr><td colspan="8" class="text-center text-muted">' + this.___("Empty!") + "</td></tr>"
            this.showToast(data.data.message || this.___("All items removed successfully!"), "success")
        } else {
            this.showToast(data.data.message || this.___("Failed to remove items!"), "error")
        }
        } catch (error) {
        console.error("Error:", error)
        this.showToast(this.___("An error occurred while removing all items."), "error")
        }
    }

    async markAsResolved(postID) {
        try {
        const formData = new FormData()
        formData.append("action", "bxajax_updatestatus")
        formData.append("id", postID)

        const response = await fetch(this.ajaxUrl, {
            method: "POST",
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            const statusElement = document.querySelector(".status_" + postID + " span")
            if (statusElement) {
            statusElement.classList.remove("text-success")
            statusElement.classList.add("text-muted")
            }

            const resolveButton = document.querySelector(".mark-as-resolved-" + postID)
            if (resolveButton) {
            resolveButton.style.display = "none"
            }

            this.showToast(data.data.message || this.___("Marked as resolved successfully!"), "success")
        } else {
            this.showToast(data.data.message || this.___("Failed to mark as resolved!"), "error")
        }
        } catch (error) {
        console.error("Error:", error)
        this.showToast(this.___("An error occurred while updating the status."), "error")
        }
    }

    async removeItem(postID) {
        try {
        const formData = new FormData()
        formData.append("action", "bxajax_removeitem")
        formData.append("id", postID)

        const response = await fetch(this.ajaxUrl, {
            method: "POST",
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            const item = document.querySelector(".item_" + postID)
            if (item) {
            item.style.opacity = "0"
            item.style.transition = "opacity 0.5s"
            setTimeout(() => {
                item.remove()
            }, 500)
            }

            this.showToast(data.data.message || this.___("Item removed successfully!"), "success")
        } else {
            this.showToast(data.data.message || this.___("Failed to remove item!"), "error")
        }
        } catch (error) {
        console.error("Error:", error)
        this.showToast(this.___("An error occurred while removing the item."), "error")
        }
    }

    showToast(message, type = "info") {
        const bootstrap = window.bootstrap
        if (typeof bootstrap !== "undefined" && bootstrap.Toast) {
        const toastHtml = `
                    <div class="toast align-items-center text-white bg-${type === "success" ? "success" : "danger"} border-0" role="alert">
                        <div class="d-flex">
                            <div class="toast-body">${message}</div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                        </div>
                    </div>
                `

        let toastContainer = document.querySelector(".toast-container")
        if (!toastContainer) {
            toastContainer = document.createElement("div")
            toastContainer.className = "toast-container position-fixed bottom-0 end-0 p-3"
            document.body.appendChild(toastContainer)
        }

        toastContainer.insertAdjacentHTML("beforeend", toastHtml)
        const toastElement = toastContainer.lastElementChild
        const toast = new bootstrap.Toast(toastElement)
        toast.show()

        // Remove toast element after it's hidden
        toastElement.addEventListener("hidden.bs.toast", () => {
            toastElement.remove()
        })
        } else {
        // Fallback to alert
        alert(message)
        }
    }
}

const reporter = new Reporter()
