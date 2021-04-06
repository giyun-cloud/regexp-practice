const str = `
Renaming is not just an exercise in changing names.
https://blog.naver.com/giyun2253
naver@naver.com
010-0550-7898-4848
aabbbbcccddddj.""
-히릿~히릿~
-힐잇~
`

console.log(str.match(/(?<=\.).{1,}/g))