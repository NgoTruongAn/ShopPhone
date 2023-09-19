function kiemTraRong(value, idErr, message) {
  if (value.trim() === "") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraSoRong(value, idErr, message) {
  if (value === "") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraEmail(value, idErr, message) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (isEmail) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraChuoi(value, idErr, message) {
  const re =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;

  var isString = re.test(value);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraMatKhau(value, idErr, message) {
  const re =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  var isPassword = re.test(value);
  if (isPassword) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraDoDai(value, min, max, idErr, message) {
  var length = value.length;
  if (length >= min && length <= max) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraSo(value, idErr, message) {
  const re = /^[0-9]+$/;

  var isString = re.test(value);
  console.log("isString: ", isString);
  if (isString) {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  } else {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  }
}

function kiemTraSoGH(value, min, max, idErr, message) {
  if (value < min || value > Number(max)) {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}

function kiemTraOption(value, idErr, message) {
  if (value === "Select Type") {
    document.querySelector(idErr).innerHTML = message;
    document.querySelector(idErr).style.display = "block";
    return false;
  } else {
    document.querySelector(idErr).innerHTML = "";
    document.querySelector(idErr).style.display = "none";
    return true;
  }
}
