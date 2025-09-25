class Reporter {
    constructor() {
        this.restapi = bxreport.rest_api
        this.i18n = bxreport.i18n
    }

    ___(key) {
        return this.i18n[key] || key
    }

    async removeAll() {
        try {
        const response = await fetch(bxreport.rest_api + '/delete_removeall', {
            method: "POST",
            headers: {
                'X-WP-Nonce': bxreport.rest_nonce,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
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
        const response = await fetch(`${this.restapi}/remove_item`, {
            method: "POST",
            headers: {
                'X-WP-Nonce': bxreport.rest_nonce,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: postID })
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
        const response = await fetch(bxreport.rest_api + '/remove_item', {
            method: "POST",
            headers: {
                'X-WP-Nonce': bxreport.rest_nonce,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: postID })
        });
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

    async loadReportPage(page = 1, show = 20) {
        try {
            const response = await fetch(`${this.restapi}/get_page`, {
                method: "POST",
                headers: {
                    'X-WP-Nonce': bxreport.rest_nonce,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ page, show })
            });
            const result = await response.json();
            const tableBody = document.querySelector("table.rp tbody");
            const topNav    = document.getElementById("bxreport-pagination");
            const countEl   = document.getElementById("bxreport-count");
            if (countEl) countEl.textContent = result.count;
            if (result.data.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="6" class="text-center">${this.___("Empty!")}</td></tr>`;
            } else {
                tableBody.innerHTML = result.data.map(item => {
                    const statusClass = item.seen == 0 ? 'text-danger' : 'text-success';
                    const reporterColor = item.name === 'BOT' ? '#d63638' : '#2271b1';
                    const lines = item.content ? item.content.split("\n") : [];
                    const contentHtml = lines.map(line => `<div class="small text-muted" style="color:#d63638; margin-bottom:2px; word-wrap: break-word; max-width: 400px;">${line}</div>`).join('');
                    return `
                    <tr class="item_${item.id}">
                        <td class="text-center status_${item.id}"><span class="${statusClass}">●</span></td>
                        <td class="text-center"><strong style="color:${reporterColor};">${item.name}</strong></td>
                        <td colspan="3" style="min-width:400px; word-wrap: break-word;">${contentHtml}</td>
                        <td class="text-center small">${item.post_name}</td>
                        <td class="text-center small">${new Date(item.date_time).toLocaleString()}</td>
                        <td class="text-center">
                            ${item.seen == 0 ? `<button type="button" class="button button-secondary mark-as-resolved-${item.id}" onclick="reporter.markAsResolved(${item.id})">${this.___("Mark As Resolved")}</button>` : ''}
                            <a href="${item.edit_post_link || '#'}" target="_blank" class="button button-primary">Edit</a>
                            <button type="button" class="button button-link-delete" onclick="reporter.removeItem(${item.id})">${this.___("Remove")}</button>
                        </td>
                    </tr>`;
                }).join('');
            }

            const totalPages = Math.ceil(result.count / result.show);
            let paginationHTML = '';
            if (page > 1) {
                paginationHTML += `<button type="button" class="button" onclick="reporter.loadReportPage(${page-1}, ${show})">‹ ${this.___("Prev")}</button>&#160;`;
            }
            if (page < totalPages) {
                paginationHTML += `<button type="button" class="button" onclick="reporter.loadReportPage(${page+1}, ${show})">${this.___("Next")} ›</button>`;
            }
            topNav.innerHTML = paginationHTML;

        } catch (error) {
            console.error("Error loading report page:", error);
        }
    }

    async saveIssues() {
        try {
            const issues = document.getElementById('bxreport_issues').value;
            const response = await fetch(bxreport.rest_api + '/save_issues', {
                method: "POST",
                headers: {
                    'X-WP-Nonce': bxreport.rest_nonce,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ issues })
            });
            const data = await response.json();
            if (data.success) {
                const textarea = document.getElementById('bxreport_issues');
                if (textarea) {
                    textarea.style.border = "2px solid #2271b1";
                    setTimeout(() => textarea.style.border = "", 1000);
                }

                this.showToast(data.message || this.___("Saved successfully!"), "success");
            } else {
                this.showToast(data.message || this.___("Failed to save!"), "error");
            }

        } catch (error) {
            console.error("Error saving issues:", error);
            this.showToast(this.___("An error occurred while saving the issues."), "error");
        }
    }

    showToast(message, type = "info") {
        let toastContainer = document.querySelector(".bx-toast-container");
        if (!toastContainer) {
            toastContainer = document.createElement("div");
            toastContainer.className = "bx-toast-container";
            toastContainer.style.position = "fixed";
            toastContainer.style.bottom = "20px";
            toastContainer.style.right = "20px";
            toastContainer.style.zIndex = 9999;
            toastContainer.style.display = "flex";
            toastContainer.style.flexDirection = "column";
            toastContainer.style.gap = "8px";
            document.body.appendChild(toastContainer);
        }
        const toast = document.createElement("div");
        toast.textContent = message;
        toast.style.padding = "10px 16px";
        toast.style.borderRadius = "6px";
        toast.style.color = "#fff";
        toast.style.fontSize = "13px";
        toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
        toast.style.opacity = 0;
        toast.style.transition = "opacity 0.3s, transform 0.3s";
        toast.style.transform = "translateY(20px)";
        switch(type) {
            case "success":
                toast.style.backgroundColor = "#2271b1"; 
                break;
            case "error":
                toast.style.backgroundColor = "#d63638"; 
                break;
            default:
                toast.style.backgroundColor = "#444"; 
        }
        toastContainer.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.opacity = 1;
            toast.style.transform = "translateY(0)";
        });

        setTimeout(() => {
            toast.style.opacity = 0;
            toast.style.transform = "translateY(20px)";
            toast.addEventListener("transitionend", () => toast.remove());
        }, 3000);
    }

}

const reporter = new Reporter()
document.addEventListener('DOMContentLoaded', () => {
    reporter.loadReportPage(1, 20);
});