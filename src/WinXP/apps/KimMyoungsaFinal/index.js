import { BrowserRouter } from "react-router-dom"
import KimMyoungsa from "../KimMyoungsa"

function KimMyoungsaFinal(){
  return(
    <BrowserRouter> {/* 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험_나중에 서버에서 서버 라우팅 방지하는 API 작성 필요  */}
      <KimMyoungsa/>
    </BrowserRouter>
  )
}

export default KimMyoungsaFinal