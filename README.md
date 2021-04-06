# 정규표현식(regexp)

## 정규 표현식의 역활
- 문자 검색
- 문자 대체
- 문자 추출

## 정규식 생성
### 생성자
```js
new RegExp('표현','옵션')
new RegExp('a-z','gi')
```
### 리터럴
```js
/표현/옵션
/[a-z]/gi
```

```js
const str = `
Renaming is not just an exercise in changing names. 
https://blog.naver.com/giyun2253
naver@naver.com
010-0550-7898-4848
aabbbbcccdddd
`
```
메소드 | 문법 | 설명
--|--|--
test | 정규식.test(문자열) | 일치 여부(Boolean)반환
match | 문자열.match(정규식) | 일치하는 문자의 배열(Array)반환
replace | 문자열.replace(정규식, 대체문자) | 일치하는 문자를 대체

</br>

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line) = 각각의 줄을 하나의 시작 끝으로 봄

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치      (|버티컬바 대신 &verbar; 을 입력하면 마크다운에서됨)
ab? | b가 없거나 b와 일치(b가 없거나 있거나)
{3} | 3개 연속 일치
{3,}| 3개 이상 연속 일치
{3,5}| 3개이상 5개이하 연속 일치
[abc]| a 또는 b 또는 c
[a-z]| a ~ z 사이의 문자 구간에 일치(영어소문자)
[A-Z]| A ~ Z 사이의 문자 구간에 일치(영어대문자)
[0-9]| 0 ~ 9 사이의 문자 구간에 일치(숫자)
[가-힣]| 가부터 힣 사이의 문자 구간에 일치(한글)
\w   | 63개 문자(Word, 대소영문52개 + 숫자 10개 + _)에 일치
\b   | 63개 문자에 해당하지 않는 문자 경계
\d   | 숫자(Digit)에 일치
\s   | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치
(?<=)| 뒤쪽 일치