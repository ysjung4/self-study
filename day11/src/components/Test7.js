import React, { Component } from 'react';
import styled from 'styled-components'

class Test7 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Image>
                        <img src="http://www.msoopent.com/data/file/artist/S91823270_P2.jpg"/>
                    </Image>
                    <Profile>
                        <h2>전도연</h2>
                        <strong>JEON DO-YEON</strong>
                        <ul>
                            <li><em>키</em>	165cm</li>
                            <li><em>데뷔</em>	광고 존슨 앤 존슨(1990)</li>
                        </ul>
                        <h3>WORKS</h3>
                        <ul>
                            <li>
                                <em>영화</em>
                                <p>	접속(1997) 약속(1998) 내 마음의 풍금(1999) 해피 엔드(1999)
                                    나도 아내가 있었으면 좋겠다(2001) 피도 눈물도 없이(2002)
                                    스캔들-조선남녀상열지사(2003) 인어공주(2004) 너는 내 운명(2005)
                                    밀양(2007) 멋진 하루(2008) 하녀(2010) 집으로 가는길(2013) 카운트다운(2011)
                                    무뢰한(2015) 협녀;칼의기억(2015) 남과 여(2016) 생일(2019)
                                    지푸라기라도 잡고 싶은 짐승들(2020)</p>
                            </li>
                            <li>
                                <em>영화</em>
                                <p>	우리들의 천국2(MBC, 1992) 사랑의 향기(MBC, 1994) 종합병원(MBC,1994)
                                    사랑은 블루(SBS, 1995) 드라마게임 - 이별하는 여섯 단계(KBS, 1995) 젊은이의 양지(KBS, 1995)
                                    프로젝트(KBS, 1996) 드라마게임 - 우체국에 가면 잃어버린 사랑을 찾을 수 있을까?(KBS, 1996)
                                    간이역(MBC, 1996) 사랑할 때까지(KBS, 1996) 별은 내 가슴에(MBC, 1997) 달팽이(SBS, 1997)</p>
                            </li>
                        </ul>
                    </Profile>
                </Container>
            </div>
        );
    }
}

export default Test7;

const Container = styled.div`
    width:1200px; margin: 0 auto;
    disply:flex;
`
const Image = styled.p`
    float:left;
    margin:30px;
    img{
        transition:0.4s;
        &:hover {
            opacity:0.7;
        }
    }
`
const Profile = styled.article`
    margin-left:40px;
    h2{
        font-size:40px;
    }
    strong {font-size:18px; display:block; padding-bottom:15px;
    border-bottom:1px solid #000; margin-bottom:30px;
    }
    ul{
        li{
            margin-bottom:20px;
            em {
                display:inline-block;
                width:120px;
            }
            p{
                display:inline-block; width:520px;
            }
        }
    }
`