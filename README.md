# ⏰ 1만 시간의 법칙 클론
**[ 배포 URL ]**
https://dayhun.github.io/10000hours/

어떤 일의 전문가가 되기 위해서는 
**1만 시간** 동안의 훈련이 필요하다고 합니다.

1만 시간을 도달하기 위해 필요한 일 수를 계산해주는 웹페이지입니다.

<div align='center'>
<img width="550" alt="스크린샷 2022-08-20 오후 11 38 47" src="https://user-images.githubusercontent.com/82689971/185751917-50084b9a-e667-4217-be65-54fce7c29efe.png">
<img width="550" alt="스크린샷 2022-08-20 오후 11 40 09" src="https://user-images.githubusercontent.com/82689971/185751978-057fe17f-3530-4ab6-82ba-34ae9e3c188f.png">
</div>

---
### 📚 배운 점
- flex를 사용하여 쉽게 레이아웃을 잡을 수 있었다.
- DOM 트리에 접근하는 querySelector의 사용법과 이벤트리스너의 동작을 경험했다.

---
### 🔎 트러블 슈팅
훈련 버튼 클릭 시, 결과화면이 0.1초 정도 보였다가 바로 사라지는 문제 발생
```html
<form class="user-input">
    <label for="user-expert">나는
        <input type="text" id="user-expert" class="input-txt" placeholder="예)프로그래밍">전문가가 될 것이다.
    </label><br>
    <label for="user-hour">그래서 앞으로 매일 하루에
        <input type="number" id="user-hour" class="input-txt" placeholder="예)5시간">시간씩 훈련할 것이다.
    </label>
    <button class="btn-user btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
</form>
```
#### ⚠️ 원인
form 태그 안에 있는 button 태그는 자동으로 submit 기능을 한다.
submit이 되면 새로고침이 되기 때문에, 결과화면이 뜨자마자 바로 사라졌던 것이다.

#### ✅ 해결
- 방법 1

    form 안에 있어도 submit 기능을 하지 않게 하기 위해 button 태그에 `type="button"`을 추가하면 된다.

```html
<!-- 수정한 코드 -->
<button class="btn-user btn" type="button">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
```

- 방법 2

    해당 EventListener에 preventDefault를 추가하여, 해당 이벤트에 대한 동작을 막을 수 있다.

```js
function calculator(event) {
    // 코드 생략
    // 해결 방법 2
    event.preventDefault();
}
startButton.addEventListener('click', calculator);
```
