const openPopup = (): void => {
	const detailsBtn = document.querySelector(".details") as HTMLButtonElement;
	const popup = document.getElementById("popup-view") as HTMLDivElement;
	detailsBtn.addEventListener("click", () => {
		document.body.style.overflowY = "hidden";
		popup.classList.remove("hidden");
		popup.classList.add("opening");
	});
};

export default openPopup;
