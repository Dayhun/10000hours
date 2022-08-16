const startButton = document.querySelector(".btn-user");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".close-btn");
const shareButton = document.querySelector(".btn-share");
const loading = document.querySelector(".result-loading");

function calculator() {
    const exportValue = document.querySelector("#user-expert");
    let timeValue = document.querySelector("#user-hour");
    let timeValue_int = Number(timeValue.value);
    const exportResult = document.querySelector(".export-result");
    const timeResult = document.querySelector(".time-result");

    if (exportValue.value == "") {
        alert('전문가가 입력되지 않았습니다.');
        exportValue.focus();
        return false;
    } else if (timeValue.value == "") {
        alert('시간이 입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = 'none';
    loading.style.display = 'flex';

    setTimeout(function () {
        exportResult.innerText = exportValue.value;
        timeResult.innerText = parseInt((10000 / timeValue_int), 10);
        loading.style.display = 'none';
        result.style.display = 'flex';
    }, 1800);
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다");
    });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
startButton.addEventListener('click', calculator);