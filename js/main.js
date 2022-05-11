const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endpoint = 8;
const select = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const calResult = ()=>{
    let result=select.indexOf(Math.max(...select)); //선택한 배열을 펼치게해줌
    return result;
}

const setResult=()=>{
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;
  
    let resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    let imgURL = `image/img-${point}.png`;
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
  
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
  }

goResult =()=>{
    qna.style.webkitAnimation= "fadeout 1s";
    qna.style.Animation= "fadeout 1s";
    setTimeout(() => {
        
        result.style.webkitAnimation= "fadein 1s";
        result.style.Animation= "fadein 1s";
        setTimeout(() =>{
            qna.style.display = "none";
            result.style.display = "block";
        },450)});

    console.log(select);
    setResult();
}
//버튼만들기3
const addAnswer=(answerText,qIdx, idx)=>{
    let a= document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add("answerList");
    answer.classList.add("my-3");
    answer.classList.add("py-3");
    answer.classList.add("mx-auto");
    answer.classList.add("fadein");
    
    a.appendChild(answer);// 앤서 버튼이 에이에게 소속되도록 관계 만들어줌
    answer.innerHTML=answerText;
    answer.addEventListener("click", ()=>{
        let children = document.querySelectorAll(".answerList");
        for(let i =0 ; i<children.length;i++){
            children[i].style.webkitAnimation= "fadeout 0.5s";
            children[i].style.Animation= "fadeout 0.5s";
            children[i].disaled=true;
        }
        setTimeout(() => {
            let target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i<target.length; i++){
            select[target[i]] += 1;
        }

            for(let i =0 ; i<children.length;i++){
                children[i].style.display = 'none';
            }
        goNext(++qIdx);
        },450)
    },false);
};
//qna 문항을 누를때 2
const goNext =(qIdx)=>{
    if(qIdx === endpoint){
        goResult();
        return;
    }
    let q =document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    
    //선택지 버튼을 만든다
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    let status = document.querySelector(".statusBar");
    status.style.width = (100/endpoint)*(qIdx+1) + "%";
}

//1
const begin =()=> {

    //첫화면에서 시작버튼을 누를 때
    main.style.webkitAnimation= "fadeout 1s";
    main.style.Animation= "fadeout 1s";
    setTimeout(() => {

        qna.style.webkitAnimation= "fadein 1s";
        qna.style.Animation= "fadein 1s";
        setTimeout(() =>{
            main.style.display = "none";
            qna.style.display = "block";
        },450)
        let qIdx=0;
        goNext(qIdx);
    }, 450);

}
