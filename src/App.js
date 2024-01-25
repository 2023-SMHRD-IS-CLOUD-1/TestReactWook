import logo from './logo.svg';
import './App.css';
// axios 이용해서 네이버 검색 api(뉴스) 데이터 가져와보기!!
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {

  // env 변수 가져오기
  const client_id = process.env.REACT_APP_CLIENT_ID
  const secret = process.env.REACT_APP_CLIENT_SECRET

  useEffect(function () {
    axios({
      url: '/v1/search/news.json',
      params:{query:'비밀'},
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': secret
      }
    })
    .then((res) => {
      console.log('가나다라마바사아자차카타파하', res);
    })
    .catch((error) => {
      console.error('응 안돼~~ 돌아가 다시해와~~~', error);
    });
  })

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
