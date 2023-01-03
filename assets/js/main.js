// MOBILE NUMBER VALIDATION
const mobile = document.getElementById("mobile");
function validateNumber() {
	let numberIsValid;
	let condition = mobile.value.search(/^-?\d+\.?\d*$/);
	// let condition = true
	if (mobile.value.trim() === "" || condition === -1) {
		mobile.classList.add("is-invalid");
		numberIsValid = false;
	} else {
		mobile.classList.remove("is-invalid");
		numberIsValid = true;
	}
	return numberIsValid;
}

// NAME VALIDATION
const UserName = document.getElementById("name");
function validateName() {
	let nameIsValid;
	if (UserName.value.trim() === "") {
		UserName.classList.add("is-invalid");
		nameIsValid = false;
	} else {
		UserName.classList.remove("is-invalid");
		nameIsValid = true;
	}
	return nameIsValid;
}

// OTP VALIDATION AND SUBMIT
const otp = document.getElementById("otp");
function validateOtp() {
	let otpIsValid;
	if (otp.value.trim() === "") {
		otp.classList.add("is-invalid");
		otpIsValid = false;
	} else {
		otp.classList.remove("is-invalid");
		otpIsValid = true;
	}
	return otpIsValid;
}

// VALIDATE PIN CODE
let pinFormSumit = false;
const pinCode = document.getElementById("pinCode");
function validatePin() {
	let pinIsValid;
	if (pinCode.value.trim() === "") {
		pinCode.classList.add("is-invalid");
		pinIsValid = false;
	} else {
		pinCode.classList.remove("is-invalid");
		pinIsValid = true;
	}
	validatePinCode(pinIsValid);
	return pinIsValid;
}

function validatePinCode(pinIsValid) {
	if (pinIsValid) {
		const pinCodeCondition =
			pinCode.value == 712403 ||
			pinCode.value == 712405 ||
			pinCode.value == 712424;
		if (pinCodeCondition) {
			console.log("pin is valid");
			pinCode.classList.add("is-valid");
			checkPinBtn.classList.add("green-btn");
			checkPinBtn.classList.remove("main-btn");
			checkPinBtn.innerText = "Continue to Buy";
		} else {
			pinCode.classList.add("is-invalid");
			pinCode.classList.remove("is-valid");
			checkPinBtn.classList.remove("green-btn");
			checkPinBtn.classList.add("main-btn");
			checkPinBtn.innerText = "Check availability";
		}
	} else {
		console.log("pin in not valid");
	}
}

const pinCodeForm = document.getElementById("pin-form");
const checkPinBtn = document.getElementById("check-pin");
pinCodeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	pinFormSumit = true;
	let pinIsValid = validatePin();
	validatePinCode(pinIsValid);
});

pinCode.addEventListener("keydown", () => {
	pinFormSumit ? validatePin() : null;
});
pinCode.addEventListener("change", () => {
	pinFormSumit ? validatePin() : null;
});
pinCode.addEventListener("paste", () => {
	validatePin();
	setTimeout(() => {
		validatePin();
		console.log("validate");
	}, 100);
});

checkPinBtn.addEventListener("click", () => {
	if (checkPinBtn.innerText == "Continue to Buy") {
		const closePinModal = document.getElementById("closePinModal");
		closePinModal.click();
		const orderModal = new bootstrap.Modal("#orderModel");
		orderModal.show();
	}
});
