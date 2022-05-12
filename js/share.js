const url = "https://amasvin-test.netlify.app/";
const setShare =()=>{
    let resultImg = document.querySelector("#resultImg");
    let resultAlt = resultImg.firstElementChild.alt;
    const shareTitle ="음료 추천 결과"
    const shareDes = infoList[resultAlt].name;
    const shareImage = `${url}image/img-${resultAlt}.png`;
    const shareURL = `${url}page/result-${resultAlt}.html`;

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL,
        },
        },

        buttons: [
        {
            title: '결과확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL
            },
        },
       
        ]
    });

}