const closePopup = (): void => {
	const popup = document.getElementById("popup-view") as HTMLDivElement;
	document.body.addEventListener("click", (event) => {
		if (
			(event.target as HTMLButtonElement).classList.contains("btn-close") ||
			(event.target as HTMLDivElement).classList.contains("overlay")
		) {
			document.body.style.overflowY = "auto";
			popup.classList.add("closing");
			setTimeout(() => {
				popup.classList.add("hidden");
				popup.classList.remove("closing");
			}, 200);
		}
	});
};

export default closePopup;
