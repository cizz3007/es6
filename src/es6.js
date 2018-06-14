class EcmaScript {

    constructor(name, heigght) {
        this._name = name;
        this._height = height;
    }


}

let ganwon = {
    resort: ['용평', '평창', '강촌', '강릉', '홍천'],
    print: (delay = 1000) => {
        setTimeout(() => {
            console.log(this.resort.join(','));
        }, delay)
    }
};

/*스프레드 연산자*/
/* 3개의 점으로 이루어진 연산자로, 몇 가지 다른 역할을 담당한다.
* 먼저 스프레드 연산자를 사용해 배열의 내용을 조합할 수 있다.
* */
let men = ['김창현', '이현범', '음영준', '이희중'];
let women = ['최수연', '노인경', '박은혜'];

let human = [...men, ...women];

console.log(human);
/*구조 분해 destructuring*/
var sandwich = {
    bread: "더치 크런치",
    meat: "참치",
    cheese: "스위스",
    toppings: ['상추', '토마토', '머스타드']
}

var {bread, meat} = sandwich;

console.log(bread, meat);

bread = '쓰레기 빵';
meat = '앵거스 쿠카';

console.log(bread, meat);

console.log('분해전에 값 ' + sandwich.bread, sandwich.meat);

var [, , firstResort] = ['용평', '평창', '강촌'];
console.log(firstResort);

/*프라미스(promise)
* 프라미스는 비동기적인 동작을 잘 다루기 위한 방법이다.
* 프라미스를 사용하면 성공이나 실패를 편리하게 단순한 성공이나 실패로 환원할 수 있다.
* 프라미스는 비동기 요청을 더 쉽게 처리할 수 있께 해준다.
* */

const getFakeMembers = (count) => new Promise((resolves, rejects) => {
    const api = 'https://api.randomuser.me/?nat=US&results=${count}'
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText))
    request.onerror = (err) => rejects(err);
    request.send();
});

getFakeMembers(10).then((members) => console.log(members),
    err => console.error(new Error('가져올 수 없다,'))
    );

class Vacation{

    constructor(destination, length){
        this._destination = destination;
        this._length = length;
    }

    print() {
        console.log(`${this._destination}은 ${this._length}자나~`);
    }
}

class Expedition extends Vacation{

    constructor(age, gender){
        super();
        this._age = age;
        this._gender = gender;
    }

    wow(){
        console.log(`${this._age}`)
    }
}