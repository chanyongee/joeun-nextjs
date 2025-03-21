export default {
  title: '소규모환경영향평가 실적',
  headers: ['협의일', '사업명'],
  // body: [
  //   ['2022.12.15', '진천군 문백면 계산리 개간'],
  //   ['2022.11.22', '충주시 살미면 설운리(하설운) 도로확포장공사'],
  //   ['2022.11.16', '증평군 질벌뜰 자연재해위험개선지구 정비사업'],
  //   ['2022.10.28', '영동군 초강천빙벽장 관광명소화사업'],
  //   ['2022.10.14', '진천군 이월면 신월리 물류창고 '],
  //   ['2022.10.04', '음성군 대소면 성본리 물류창고 (㈜○○로지스)'],
  //   ['2022.09.29', '여주시 강천면 간매리 공장(㈜티○)'],
  //   ['2022.09.29', '진천군 덕산읍 산수리 근린생활시설 및 창고 '],
  //   ['2022.09.21', '제천시 금성면 양화리 창고 및 제2종근린생활시설(사무소) '],
  //   ['2022.08.10', '충주시 주덕읍 대곡리 자원순환관련시설(토양정화업) '],
  //   ['2022.08.02', '괴산군 청천면 금평리 공장(금○산업)'],
  //   ['2022.08.02', '단양군 평동지구 풍수해생활권 종합정비사업'],
  //   ['2022.07.19', '공주시 계룡산 갑사야영장 '],
  //   ['2022.07.12', '여주시 강천면 간매리 공장(㈜티○)'],
  //   ['2022.06.20', '원주시 추모공원 조성'],
  //   [
  //     '2022.06.07',
  //     '청주시 청원구 북이면 추학리 공장부지 증설사업(○○콘크리트㈜)',
  //   ],
  //   ['2022.05.19', '충주시 앙성면 모점리 관광농원 (밤○관광농원)'],
  //   ['2022.05.10', '음성군 음성읍 초천리 단독주택 및 야영장 '],
  //   ['2022.04.19', '충주시 달천동 충주 어린이체육공원 '],
  //   ['2022.04.18', '청주시 흥덕구 옥산면 호죽리 공장(㈜○○쉼터)'],
  //   [
  //     '2022.02.23',
  //     '용인시 처인구 백암면 석천리 자원순환시설(폐기물 처리시설) 부지증설사업(㈜동○○이오)',
  //   ],
  //   [
  //     '2022.02.22',
  //     '제천시 금성면 양화리 창고(일반창고)신축 및 제1종근린생활시설(소매점) ',
  //   ],
  //   ['2022.01.12', '보은군 수한면 거현리 개간사업'],
  //   ['2021.10.12', '구례군 토지면 문수리 반달가슴곰 자연적응훈련장 정비공사'],
  //   ['2021.07.27', '영덕군 창수면 신기리 태양광발전소 '],
  //   ['2021.04.23', '충청북도 국제교육원 중부분원 '],
  //   ['2021.04.09', '홍천군 동면 방량리 단독주택 신축 '],
  //   ['2021.04.09', '홍천군 두촌면 괘석리 농경지(전) '],
  //   ['2021.03.18', '홍천군 두촌면 천현리 농경지(과) '],
  //   ['2021.03.18', '홍천군 두촌면 괘석리 농경지(전) '],
  //   ['2021.03.05', '증평군 도안면 입장소하천 정비사업'],
  //   ['2021.03.05', '원주시 문막읍 취병리 동식물관련시설(돈사) 양성화사업'],
  //   ['2021.01.15', '청주시 흥덕구 옥산면 소로리 문화집회시설 및 근린생활시설 '],
  //   ['2020.12.24', '여주시 가남읍 심석리 물류창고 (㈜○에스)'],
  //   ['2020.12.21', '괴산군 칠성면 율지리 공장 '],
  //   ['2020.11.13', '철원군 서면 자등리 동식물관련시설(축사) '],
  //   [
  //     '2020.11.09',
  //     '원주시 호저면 매호리 근린생활시설 신축 및 진출입로 개설사업',
  //   ],
  //   ['2020.11.04', '괴산군 문광면 대명리 동식물관련시설(버섯재배사) '],
  //   ['2020.10.23', '충주시 산척면 송강리 태양광발전소 '],
  //   ['2020.10.07', '음성군 음성읍 신천 자연재해위험개선지구 정비사업(소여천)'],
  //   ['2020.10.06', '대전시 도안 2-3지구 도시개발사업'],
  //   [
  //     '2020.09.16',
  //     '충주시 신니면 용원리 공장 제조시설 설치사업(㈜프○○스 홀딩스)',
  //   ],
  //   ['2020.08.31', '충주시 중앙탑면 장천리 일원 목계솔밭캠핑장 '],
  //   ['2020.08.18', '충주시 중앙탑면 군도11호선(잣고개) 선형개량사업'],
  //   ['2020.07.13', '음성군 미호천 선정지구 지방하천 정비사업'],
  //   ['2020.05.26', '홍천군 남면 유치리 동식물관련시설(곤충사육장) '],
  //   ['2020.05.11', '충주시 노은면 문성리 공장'],
  //   ['2020.04.29', '괴산군 고마천 고마지구 지방하천 정비사업'],
  //   ['2020.04.10', '청주시 완충녹지1호 조성'],
  //   ['2020.01.29', '충주시 달천동 일원 유소년 축구장 조성'],
  //   ['2019.12.27', '충주시 주덕읍 화곡리 ㈜덕산 공장부지 증설사업'],
  //   ['2019.12.12', '춘천시 남면 박암리 야영장 및 근린생활시설 '],
  //   ['2019.12.03', '충주시 주덕읍 대곡리 ㈜에○제이환경산업 공장증설'],
  //   ['2019.11.27', '영천댐 안전성강화사업 건설공사(변경1차)'],
  //   ['2019.10.16', '충주시 노은면 신효리 김○나라 제2공장 '],
  //   [
  //     '2019.10.07',
  //     '안성시 일죽면 방초리 동식물관련시설(작물 재배사) (㈜스타○○머)',
  //   ],
  //   ['2019.08.08', '충주시 주덕읍 대곡리 ㈜에스제이환경산업 공장신설 변경승인'],
  //   ['2019.07.08', '홍천군 화촌면 군업리 개간'],
  //   ['2019.06.13', '영천댐 안전성강화사업 건설공사 우선대상공종(F/T)'],
  //   ['2019.02.21', '여주시 강천면 간매리 물류창고 (이욱희)'],
  //   ['2019.01.09', '충주시 주덕읍 화곡리 공장부지 증설사업(㈜○산)'],
  //   ['2018.12.14', '충주시 중앙탑면 루암리 버섯재배사 '],
  //   ['2018.11.29', '횡성군 서원면 옥계리 대지조성사업(㈜에○원)'],
  //   ['2018.11.02', '토계 재해위험개선지구 정비사업'],
  //   ['2018.10.23', '청주시 서원구 남이면 상발리 공장 '],
  //   ['2018.10.23', '청주시 흥덕구 옥산면 소로리 근린생활시설 '],
  //   [
  //     '2018.10.04',
  //     '용인시 처인구 백암면 석천리 자원순환시설(폐기물 처리시설) 부지증설사업(㈜동○○○오)',
  //   ],
  //   ['2018.10.02', '청주시 상당구 가덕면 한계리 개간'],
  //   ['2018.09.28', '단양군 어상천면 임현리 딱발골소하천 정비사업'],
  //   ['2018.09.19', '단양군 영춘면 의풍리(군도14호선) 도로확포장사업'],
  //   ['2018.08.27', '청주시 흥덕구 옥산면 호죽리 초○쉼터 공장'],
  //   [
  //     '2018.08.01',
  //     '양양군 현남면 견불리 태양광발전사업시설 및 진출입로(도로) ',
  //   ],
  //   ['2018.08.01', '고성군 죽왕면 구성리 태양광발전시설 '],
  //   ['2018.08.01', '홍천군 내면 자운리 태양광발전시설'],
  //   ['2018.08.01', '평창군 진부면 두일리 태양광발전시설 '],
  //   ['2018.08.01', '강릉시 주문진읍 향호리 태양광발전시설 (㈜강○○라)'],
  //   ['2018.08.01', '용인시 처인구 백암면 근삼리 근린생활시설 조성공사'],
  //   ['2018.07.31', '공주시 이인면 복룡리 태양광발전시설 및 진출입로 '],
  //   ['2018.07.25', '강릉시 왕산면 고단리 태양광발전시설 '],
  //   ['2018.07.23', '이천시 장호원읍 어석리 태양광발전시설 및 도로'],
  //   ['2018.07.23', '여주시 강천면 걸은리 태양광발전시설 및 진출입로'],
  //   ['2018.07.20', '청주시 서원구 남이면 상발리 공장 '],
  //   ['2018.07.12', '충주시 대소원면 완오리 ㈜씨○스코리아 공장부지 증설사업'],
  //   ['2018.07.11', '강릉시 옥계면 북동리 태양광발전시설 '],
  //   ['2018.07.10', '세종특별자치시 첨단산업단지 진입도로 개설사업'],
  //   ['2018.07.03', '안성시 삼죽면 진촌리 태양광발전시설 (㈜○주발전소)'],
  //   ['2018.06.27', '청주시 흥덕구 옥산면 호죽리 공장 (㈜강○○○씨)'],
  //   ['2018.06.20', '홍천군 홍천읍 하오안리 야적장 '],
  //   ['2018.06.18', '강릉시 주문진읍 향호리 공장부지 증설사업(㈜○서산업개발)'],
  //   ['2018.06.14', '홍천군 동면 좌운리 태양광발전소 및 공작물 설치'],
  //   [
  //     '2018.06.01',
  //     '강릉시 주문진읍 향호리 태양광발전시설 (㈜케○○○○이, ㈜지○○라',
  //   ],
  //   ['2018.05.29', '강릉시 강동면 모전리 태양광 발전시설 '],
  //   ['2018.05.23', '충주시 신니면 마수리 태양광발전시설 (○성2호)'],
  //   ['2018.05.11', '강릉시 주문진읍 향호리 태양광발전시설 '],
  //   ['2018.05.10', '용인시 처인구 백암면 근삼리 근린생활시설 조성공사'],
  //   ['2018.05.03', '이천시 백사면 송말리 공장 및 도로'],
  //   ['2018.04.10', '홍천군 동면 좌운리 태양광발전소 및 공작물 설치 '],
  //   ['2018.03.27', '충주시 신니면 문숭리 태양광발전시설 '],
  //   ['2018.03.26', '강릉시 강동면 모전리 태양광 발전시설 '],
  //   ['2018.03.06', '음성군 한천 금왕지구 지방하천 정비사업'],
  //   ['2018.03.06', '강릉시 주문진읍 향호리 태양광 발전시설 '],
  //   ['2018.02.22', '청주시 상당구 가덕면 한계리 개간'],
  //   ['2018.02.08', '괴산군 공공하수처리시설 증설사업'],
  //   ['2018.02.02', '홍천군 서면 반곡리 단독주택 '],
  //   ['2018.02.01', '청주시 상당구 미원면 용곡리 ㈜보○ 광산(규석) 채광계획변경'],
  //   ['2018.01.29', '제천시 봉양읍 삼거리 공장 '],
  //   ['2018.01.26', '홍천군 동면 노천리 개간'],
  //   ['2018.01.05', '제천시 송학면 도화리 개간'],
  //   ['2018.01.03', '양양군 답리 제2종 근린생활시설(사무소) '],
  //   ['2017.12.11', '강릉시 주문진읍 향호리 태양광 발전시설 '],
  //   ['2017.10.10', '여주시 점동면 처리 태양광발전시설'],
  //   ['2017.09.08', '국도17호선 오창사거리 지하차도 건설공사'],
  //   ['2017.09.06', '충주시 동량면 조동리 태양광 발전시설'],
  //   [
  //     '2017.09.05',
  //     '안성시 삼죽면 율곡리 태양광 발전시설 (○○하늘 태양광발전소㈜)',
  //   ],
  //   ['2017.08.28', '홍천군 홍천읍 하오안리 단독주택단지'],
  //   ['2017.07.31', '증평군 허브랜드 조성'],
  //   ['2017.07.24', '충주시 신니면 마수리 태양광발전소'],
  //   ['2017.07.18', '문경시 마성면 모곡리 개간'],
  //   ['2017.06.20', '명신산업 외 1개사 공장 및 도로'],
  //   ['2017.04.07', '제천시 봉양읍 연박리 관광농원'],
  //   ['2017.04.07', '괴산군 청안면 부흥리 공장'],
  //   ['2017.03.03', '여주시 점동면 처리 개간'],
  //   ['2017.01.24', '괴산군 괴산읍 서부리 연립주택(㈜○우엘이디)'],
  //   ['2017.01.24', '제천시 청풍면 연론리 태양광발전소'],
  //   ['2017.01.24', '제천시 봉양읍 삼거리 공장 및 사도개설 '],
  //   [
  //     '2016.12.13',
  //     '안성시 일죽면 방초리 일원의 ㈜○우산업 제1종 근린생활시설(소매점-건축자재) ',
  //   ],
  //   ['2016.11.28', '증평군 허브랜드 조성'],
  //   [
  //     '2016.11.10',
  //     '음성군 맹동면 봉현리 ㈜정○리싸이클링 폐기물에너지화 설비 건설사업',
  //   ],
  //   ['2016.11.08', '충주시 주덕읍 ㈜○산 공장'],
  //   ['2016.10.19', '(합)우○환경산업 및 (자)금○개발 공장'],
  //   ['2016.10.14', '㈜성안 관광휴양단지 및 관광농원 '],
  //   ['2016.09.22', '정희태양광발전소 발전(태양광)시설 '],
  //   ['2016.09.19', '생거진천 치유의 숲 조성'],
  //   ['2016.09.09', '홍천 삼마을 리조트 관광농원 '],
  //   ['2016.09.07', '홍천군 서면 대곡리 전원마을 '],
  //   ['2016.08.23', '명신산업 외 1개사 공장 및 도로'],
  //   ['2016.07.29', '제천시 덕산면 신현리 태양광발전시설'],
  //   ['2016.07.28', '여주시 금사면 도곡리 한○○ 개간'],
  //   ['2016.07.21', '괴산군 괴산읍 서부리 연립주택'],
  //   ['2016.07.15', '이천시 장호원읍 와현리 개간'],
  //   [
  //     '2016.07.14',
  //     '채정신 외 1인 및 용강호 외 1인 제1종 근린생활시설(소매점) 및 도로',
  //   ],
  //   ['2016.06.21', '강릉시 왕산면 대기리 개간사업'],
  //   ['2016.06.21', '㈜○원석재 토석채취허가'],
  //   ['2016.06.20', '충주시 산척면 영덕리 ○림산업㈜ 사토장 '],
  //   ['2016.06.16', '홍천군 남면 제곡리 전원마을 '],
  //   ['2016.06.10', '금고~비산(2공구) 도로확포장공사'],
  //   ['2016.06.10', '강릉시 왕산면 대기리 발전시설 신축'],
  //   ['2016.06.03', '진천군 이월면 미잠리 야적장 (○강공업㈜)'],
  //   ['2016.06.01', '여주시 가남읍 삼승리 개간'],
  //   ['2016.05.25', '생거진천 치유의 숲 조성'],
  //   ['2016.05.02', '○성레미콘㈜ 공장'],
  //   ['2016.04.11', '성주군 신천 생태하천복원사업'],
  //   ['2016.04.05', '원주시 흥업면 대안리 버섯재배단지 '],
  //   ['2016.04.05', '㈜금림소재개발 개발행위 및 공유수면 점용ㆍ사용'],
  //   ['2016.04.05', '삼일리 관광농원 개발사업'],
  //   [
  //     '2016.03.31',
  //     '안성시 일죽면 방초리 주식회사 태양농원 판매시설(농산물-버섯) 부지조성공사',
  //   ],
  //   ['2016.03.22', '안성시 일죽면 방초리 이옥현 제1종근린생활시설(소매점) '],
  //   ['2016.03.22', '이천시 호법면 매곡리 관광농원 부지조성'],
  //   ['2016.03.04', '평창군 봉평면 진조리 개간사업'],
  //   ['2016.03.04', '홍천군 서면 대곡리 전원마을 '],
  //   ['2016.02.26', '홍천군 남면 유목정리 농경지(전) '],
  //   ['2016.01.28', '농업회사법인 해○㈜ 동식물관련시설(축사-계사) 신축'],
  //   ['2016.01.12', '음성군 대소면 부윤리 ○도○앤씨㈜ 공장설립'],
  //   ['2016.01.12', '음성군 삼성면 천평리 한○기업(유) 외 2개사 공장 및 진입로 '],
  //   ['2016.01.12', '조촌마을권역단위 종합정비사업(원남지 야영장)'],
  //   ['2015.12.31', '여주시 흥천면 다대리 일반창고 (남○철강)'],
  //   ['2015.12.16', '홍천군 서면 굴업리 농경지(전) '],
  //   ['2015.12.11', '제천군 금성면 월림리 공장설립(고추가루)신축사업'],
  //   ['2015.11.20', '원주시 부론면 단강리 태양광발전소 '],
  //   ['2015.11.04', '옥천군 군서면소재지 종합정비사업 중 테마연결도로정비'],
  //   ['2015.10.22', '길○하 개간'],
  //   ['2015.10.20', '충주시 신니면 신청리 태양광발전시설 '],
  //   ['2015.10.16', '여주시 능서면 용은리 개간'],
  //   ['2015.09.18', '왕산면 대기리 풍력발전소 부지조성'],
  //   ['2015.09.18', '류희경 동물 및 식물 관련시설(축사-오리사)'],
  //   ['2015.09.08', '길○하 개간'],
  //   ['2015.08.24', '농업회사법인 해○㈜ 동식물관련시설(축사-계사) 신축'],
  //   ['2015.08.21', '제천덕산(지방도534호선) 도로정비공사'],
  //   ['2015.08.06', '사내면 사창리 태양광 발전시설 설치사업'],
  //   ['2015.07.28', '여주시 강천면 걸은리 개간'],
  //   ['2015.07.24', '물건적치장 명의변경에 따른 변경사업'],
  //   ['2015.06.15', '중○기업㈜ 육상골재 채취사업'],
  //   ['2015.05.20', '홍천군 서면 대곡리 전원마을 '],
  //   ['2015.04.27', '명봉산 솔밭 관광농원개발사업'],
  //   [
  //     '2015.04.09',
  //     '종교시설(사찰) 부지조성(요사채 신축 및 주차장 부지조성)사업',
  //   ],
  //   ['2015.04.08', '횡성군 둔내면 삽교리 물건 적치장 증설에 따른 변경사업'],
  //   ['2015.03.30', '㈜○산 육상골재 채취사업'],
  //   ['2015.03.17', '김○우, 김○우 전원주택단지 '],
  //   ['2015.02.16', '홍천군 서석면 청량리 우량농경지 부지조성'],
  //   ['2015.02.10', '충주시 동량면 대전리 관광농원개발사업'],
  //   ['2015.02.03', '여주시 가남읍 연대리 개간사업'],
  //   ['2014.12.11', '㈜한국○○카 친환경미네소타 제조공장 '],
  //   ['2014.11.18', '종교시설 및 진출입로 (대○○○교)'],
  //   ['2014.11.05', '허○ 개간'],
  //   [
  //     '2014.11.04',
  //     '홍천군 화촌면 구성포리 단독주택 및 버섯재배사 및 진출입로 ',
  //   ],
  //   ['2014.10.20', '○우씨엠㈜ 자동차관련시설 (주기장)'],
  //   ['2014.10.13', '오○○○칼㈜ 공장 및 진입도로'],
  //   ['2014.09.22', '현암~가산간(시도9호) 도로확포장공사(1공구)'],
  //   ['2014.09.15', '단양 사지원지구 위험도로개량공사'],
  //   ['2014.08.21', '신○호 외 5인 개간사업'],
  //   ['2014.08.01', '○일산업㈜ 레미콘 공장신설'],
  //   ['2014.07.23', '음성군 금왕읍 오선리 창고시설 (○○환경개발㈜)'],
  //   ['2014.07.22', '㈜중○산업 육상골재 채취사업(충주시 대소원면 장성리)'],
  //   ['2014.07.14', '단양 올산도로(대수동) 선형개량공사'],
  //   ['2014.06.19', '가곡면 소재지 종합정비사업(다목적쉼터 )'],
  //   [
  //     '2014.06.12',
  //     '천안시 동남구 목천읍 송전리 제1종 근린생활시설(소매점) 및 도로',
  //   ],
  //   ['2014.04.17', '괴산군 불경면 ○○바이오비료주식회사 공장'],
  //   ['2014.04.02', '삼곡~파랑간(군도10호) 도로확포장공사'],
  //   ['2014.03.21', '진천군 덕산면 신척리 개간사업'],
  //   ['2014.03.21', '괴산군 청안면 부흥리 공장설립'],
  //   ['2014.03.10', '㈜○○엘이디 연립주택 '],
  //   ['2014.03.06', '㈜에스○○&㈜한○ 공장'],
  //   ['2014.02.10', '국도25호선 성주리지내 단구간확장공사'],
  //   ['2013.11.27', '○주환경㈜ 건설폐기물 처리시설 야적장부지'],
  //   ['2013.11.11', '현암~가산간(군도9호선)도로확포장공사(2공구)'],
  //   ['2013.11.06', '한국○○플랜트㈜ 야적장 (변경)'],
  //   ['2013.11.06', '여주시 상교동 ○○레미콘㈜ 야적장 '],
  //   ['2013.10.23', '남면 시동리 농경지(과) '],
  //   ['2013.10.15', '원주시 지정면 보통리 자동차매매장 '],
  //   ['2013.10.14', '㈜○v에스티 사업계획승인신청'],
  //   ['2013.10.07', '서면 두미리 농경지 (전) '],
  //   [
  //     '2013.09.23',
  //     '강천섬 권역 농촌마을 종합개발사업(마을공동농산어촌체험시설)',
  //   ],
  //   ['2013.09.17', '㈜경○테크 공장'],
  //   ['2013.09.13', '상활리 진입도로(가남 208호) 확포장공사'],
  //   ['2013.08.28', '음성군 대소면 대풍리 서보산업 공장부지 증설사업'],
  //   ['2013.08.20', '㈜○우바이오 개간'],
  //   ['2013.08.13', '원주시 흥업면 사제리 창고시설 신축사업'],
  //   ['2013.07.30', '이○순 외 5인 개간사업'],
  //   ['2013.07.10', '주덕 다목적운동장 조성'],
  //   ['2013.06.17', '진천 신월리 ㈜서○레미콘 레미콘플랜트 설치'],
  //   ['2013.06.05', '홍천군 남면 유치리 액비조'],
  //   ['2013.06.05', '㈜코○틸 제3공장 공장'],
  //   ['2013.06.04', '충주시 신니면 ㈜썬○○피 공장'],
  //   ['2013.06.03', '홍천군 서면 모곡리 단독주택 및 근린생활시설 '],
  //   ['2013.06.03', '홍천군 남면 남노일리 육상골재 채취사업'],
  //   ['2013.03.26', '단양 여천소하천 정비사업'],
  //   ['2013.03.13', '충주시 주덕읍 화곡리 육상골재 채취사업'],
  //   ['2013.03.13', '충주시 주덕읍 화곡리 육상골재 채취사업'],
  //   [
  //     '2013.03.11',
  //     '강천섬 권역 농촌마을 종합개발사업(마을공동농산어촌체험시설)',
  //   ],
  //   ['2013.03.05', '단양 올산도로 선형개량공사'],
  //   ['2013.02.25', '영월군 북면 태양광 발전시설 '],
  //   ['2013.02.22', '여주군농협조합공동법인 창고 부지증설사업'],
  //   ['2013.02.19', '홍천군 남면 남노일리 육상골재(태○개발)'],
  //   ['2013.02.15', '㈜태○ 공장 조성'],
  //   ['2013.01.18', '㈜금○ 공장 조성'],
  //   ['2013.01.10', '원주시 흥업면 사제리 창고시설 신축 '],
  //   ['2013.01.10', '화천군 간동면 농산물판매점 신축 및 우량농지'],
  //   ['2013.01.10', '윤○원 전원주택지 '],
  //   ['2013.01.08', '지정면 월송리 단독주택 및 근린생활시설 '],
  //   ['2012.12.20', '㈜성○ 외 1개사 공장'],
  //   ['2012.12.18', '홍천군 남면 남노일리'],
  //   ['2012.12.10', '일○건설㈜ 전원주택 '],
  //   ['2012.12.07', '홍천군 내면 자운리 개간사업'],
  //   ['2012.11.22', '대덕지구 지표수보강개발사업'],
  //   ['2012.11.21', '음성군 쌀조합공동사업법인 공장 설립사업'],
  //   ['2012.11.08', '이○형 개간 및 주택'],
  //   ['2012.11.07', '홍천군 내촌면 답풍리 토석채취사업[㈜광○]'],
  //   ['2012.11.06', '춘천시 남산면 산수리 단독주택 및 진입로 '],
  //   ['2012.11.01', '청원 구방리 동○원자연휴양림 조성계획'],
  //   ['2012.10.31', '충주천(달천) 하도준설사업'],
  //   ['2012.10.16', '김규창 태양광 발전시설 '],
  //   ['2012.10.15', '괴산군 괴산읍 신항리 주택부지조성 및 사도설치사업'],
  //   ['2012.09.05', '이○순 개간사업'],
  //   ['2012.08.29', '충주시 산척면 영덕리 골재야적장 증설사업[㈜○○레미콘]'],
  //   ['2012.08.28', '㈜○○파일 외 1개사 공장'],
  //   ['2012.08.10', '㈜○○환경 공장부지 조성'],
  //   ['2012.08.08', '○○이엔티㈜ 공장설립사업'],
  //   ['2012.08.02', '월암소하천 정비공사'],
  // ],
  body: [
    {
      협의일: '2022.12.15',
      사업명: '진천군 문백면 계산리 개간',
    },
    {
      협의일: '2022.11.22',
      사업명: '충주시 살미면 설운리(하설운) 도로확포장공사',
    },
    {
      협의일: '2022.11.16',
      사업명: '증평군 질벌뜰 자연재해위험개선지구 정비사업',
    },
    {
      협의일: '2022.10.28',
      사업명: '영동군 초강천빙벽장 관광명소화사업',
    },
    {
      협의일: '2022.10.14',
      사업명: '진천군 이월면 신월리 물류창고 ',
    },
    {
      협의일: '2022.10.04',
      사업명: '음성군 대소면 성본리 물류창고 (㈜○○로지스)',
    },
    {
      협의일: '2022.09.29',
      사업명: '여주시 강천면 간매리 공장(㈜티○)',
    },
    {
      협의일: '2022.09.29',
      사업명: '진천군 덕산읍 산수리 근린생활시설 및 창고 ',
    },
    {
      협의일: '2022.09.21',
      사업명: '제천시 금성면 양화리 창고 및 제2종근린생활시설(사무소) ',
    },
    {
      협의일: '2022.08.10',
      사업명: '충주시 주덕읍 대곡리 자원순환관련시설(토양정화업) ',
    },
    {
      협의일: '2022.08.02',
      사업명: '괴산군 청천면 금평리 공장(금○산업)',
    },
    {
      협의일: '2022.08.02',
      사업명: '단양군 평동지구 풍수해생활권 종합정비사업',
    },
    {
      협의일: '2022.07.19',
      사업명: '공주시 계룡산 갑사야영장 ',
    },
    {
      협의일: '2022.07.12',
      사업명: '여주시 강천면 간매리 공장(㈜티○)',
    },
    {
      협의일: '2022.06.20',
      사업명: '원주시 추모공원 조성',
    },
    {
      협의일: '2022.06.07',
      사업명: '청주시 청원구 북이면 추학리 공장부지 증설사업(○○콘크리트㈜)',
    },
    {
      협의일: '2022.05.19',
      사업명: '충주시 앙성면 모점리 관광농원 (밤○관광농원)',
    },
    {
      협의일: '2022.05.10',
      사업명: '음성군 음성읍 초천리 단독주택 및 야영장 ',
    },
    {
      협의일: '2022.04.19',
      사업명: '충주시 달천동 충주 어린이체육공원 ',
    },
    {
      협의일: '2022.04.18',
      사업명: '청주시 흥덕구 옥산면 호죽리 공장(㈜○○쉼터)',
    },
    {
      협의일: '2022.02.23',
      사업명:
        '용인시 처인구 백암면 석천리 자원순환시설(폐기물 처리시설) 부지증설사업(㈜동○○이오)',
    },
    {
      협의일: '2022.02.22',
      사업명:
        '제천시 금성면 양화리 창고(일반창고)신축 및 제1종근린생활시설(소매점) ',
    },
    {
      협의일: '2022.01.12',
      사업명: '보은군 수한면 거현리 개간사업',
    },
    {
      협의일: '2021.10.12',
      사업명: '구례군 토지면 문수리 반달가슴곰 자연적응훈련장 정비공사',
    },
    {
      협의일: '2021.07.27',
      사업명: '영덕군 창수면 신기리 태양광발전소 ',
    },
    {
      협의일: '2021.04.23',
      사업명: '충청북도 국제교육원 중부분원 ',
    },
    {
      협의일: '2021.04.09',
      사업명: '홍천군 동면 방량리 단독주택 신축 ',
    },
    {
      협의일: '2021.04.09',
      사업명: '홍천군 두촌면 괘석리 농경지(전) ',
    },
    {
      협의일: '2021.03.18',
      사업명: '홍천군 두촌면 천현리 농경지(과) ',
    },
    {
      협의일: '2021.03.18',
      사업명: '홍천군 두촌면 괘석리 농경지(전) ',
    },
    {
      협의일: '2021.03.05',
      사업명: '증평군 도안면 입장소하천 정비사업',
    },
    {
      협의일: '2021.03.05',
      사업명: '원주시 문막읍 취병리 동식물관련시설(돈사) 양성화사업',
    },
    {
      협의일: '2021.01.15',
      사업명: '청주시 흥덕구 옥산면 소로리 문화집회시설 및 근린생활시설 ',
    },
    {
      협의일: '2020.12.24',
      사업명: '여주시 가남읍 심석리 물류창고 (㈜○에스)',
    },
    {
      협의일: '2020.12.21',
      사업명: '괴산군 칠성면 율지리 공장 ',
    },
    {
      협의일: '2020.11.13',
      사업명: '철원군 서면 자등리 동식물관련시설(축사) ',
    },
    {
      협의일: '2020.11.09',
      사업명: '원주시 호저면 매호리 근린생활시설 신축 및 진출입로 개설사업',
    },
    {
      협의일: '2020.11.04',
      사업명: '괴산군 문광면 대명리 동식물관련시설(버섯재배사) ',
    },
    {
      협의일: '2020.10.23',
      사업명: '충주시 산척면 송강리 태양광발전소 ',
    },
    {
      협의일: '2020.10.07',
      사업명: '음성군 음성읍 신천 자연재해위험개선지구 정비사업(소여천)',
    },
    {
      협의일: '2020.10.06',
      사업명: '대전시 도안 2-3지구 도시개발사업',
    },
    {
      협의일: '2020.09.16',
      사업명: '충주시 신니면 용원리 공장 제조시설 설치사업(㈜프○○스 홀딩스)',
    },
    {
      협의일: '2020.08.31',
      사업명: '충주시 중앙탑면 장천리 일원 목계솔밭캠핑장 ',
    },
    {
      협의일: '2020.08.18',
      사업명: '충주시 중앙탑면 군도11호선(잣고개) 선형개량사업',
    },
    {
      협의일: '2020.07.13',
      사업명: '음성군 미호천 선정지구 지방하천 정비사업',
    },
    {
      협의일: '2020.05.26',
      사업명: '홍천군 남면 유치리 동식물관련시설(곤충사육장) ',
    },
    {
      협의일: '2020.05.11',
      사업명: '충주시 노은면 문성리 공장',
    },
    {
      협의일: '2020.04.29',
      사업명: '괴산군 고마천 고마지구 지방하천 정비사업',
    },
    {
      협의일: '2020.04.10',
      사업명: '청주시 완충녹지1호 조성',
    },
    {
      협의일: '2020.01.29',
      사업명: '충주시 달천동 일원 유소년 축구장 조성',
    },
    {
      협의일: '2019.12.27',
      사업명: '충주시 주덕읍 화곡리 ㈜덕산 공장부지 증설사업',
    },
    {
      협의일: '2019.12.12',
      사업명: '춘천시 남면 박암리 야영장 및 근린생활시설 ',
    },
    {
      협의일: '2019.12.03',
      사업명: '충주시 주덕읍 대곡리 ㈜에○제이환경산업 공장증설',
    },
    {
      협의일: '2019.11.27',
      사업명: '영천댐 안전성강화사업 건설공사(변경1차)',
    },
    {
      협의일: '2019.10.16',
      사업명: '충주시 노은면 신효리 김○나라 제2공장 ',
    },
    {
      협의일: '2019.10.07',
      사업명: '안성시 일죽면 방초리 동식물관련시설(작물 재배사) (㈜스타○○머)',
    },
    {
      협의일: '2019.08.08',
      사업명: '충주시 주덕읍 대곡리 ㈜에스제이환경산업 공장신설 변경승인',
    },
    {
      협의일: '2019.07.08',
      사업명: '홍천군 화촌면 군업리 개간',
    },
    {
      협의일: '2019.06.13',
      사업명: '영천댐 안전성강화사업 건설공사 우선대상공종(F/T)',
    },
    {
      협의일: '2019.02.21',
      사업명: '여주시 강천면 간매리 물류창고 (이욱희)',
    },
    {
      협의일: '2019.01.09',
      사업명: '충주시 주덕읍 화곡리 공장부지 증설사업(㈜○산)',
    },
    {
      협의일: '2018.12.14',
      사업명: '충주시 중앙탑면 루암리 버섯재배사 ',
    },
    {
      협의일: '2018.11.29',
      사업명: '횡성군 서원면 옥계리 대지조성사업(㈜에○원)',
    },
    {
      협의일: '2018.11.02',
      사업명: '토계 재해위험개선지구 정비사업',
    },
    {
      협의일: '2018.10.23',
      사업명: '청주시 서원구 남이면 상발리 공장 ',
    },
    {
      협의일: '2018.10.23',
      사업명: '청주시 흥덕구 옥산면 소로리 근린생활시설 ',
    },
    {
      협의일: '2018.10.04',
      사업명:
        '용인시 처인구 백암면 석천리 자원순환시설(폐기물 처리시설) 부지증설사업(㈜동○○○오)',
    },
    {
      협의일: '2018.10.02',
      사업명: '청주시 상당구 가덕면 한계리 개간',
    },
    {
      협의일: '2018.09.28',
      사업명: '단양군 어상천면 임현리 딱발골소하천 정비사업',
    },
    {
      협의일: '2018.09.19',
      사업명: '단양군 영춘면 의풍리(군도14호선) 도로확포장사업',
    },
    {
      협의일: '2018.08.27',
      사업명: '청주시 흥덕구 옥산면 호죽리 초○쉼터 공장',
    },
    {
      협의일: '2018.08.01',
      사업명: '양양군 현남면 견불리 태양광발전사업시설 및 진출입로(도로) ',
    },
    {
      협의일: '2018.08.01',
      사업명: '고성군 죽왕면 구성리 태양광발전시설 ',
    },
    {
      협의일: '2018.08.01',
      사업명: '홍천군 내면 자운리 태양광발전시설',
    },
    {
      협의일: '2018.08.01',
      사업명: '평창군 진부면 두일리 태양광발전시설 ',
    },
    {
      협의일: '2018.08.01',
      사업명: '강릉시 주문진읍 향호리 태양광발전시설 (㈜강○○라)',
    },
    {
      협의일: '2018.08.01',
      사업명: '용인시 처인구 백암면 근삼리 근린생활시설 조성공사',
    },
    {
      협의일: '2018.07.31',
      사업명: '공주시 이인면 복룡리 태양광발전시설 및 진출입로 ',
    },
    {
      협의일: '2018.07.25',
      사업명: '강릉시 왕산면 고단리 태양광발전시설 ',
    },
    {
      협의일: '2018.07.23',
      사업명: '이천시 장호원읍 어석리 태양광발전시설 및 도로',
    },
    {
      협의일: '2018.07.23',
      사업명: '여주시 강천면 걸은리 태양광발전시설 및 진출입로',
    },
    {
      협의일: '2018.07.20',
      사업명: '청주시 서원구 남이면 상발리 공장 ',
    },
    {
      협의일: '2018.07.12',
      사업명: '충주시 대소원면 완오리 ㈜씨○스코리아 공장부지 증설사업',
    },
    {
      협의일: '2018.07.11',
      사업명: '강릉시 옥계면 북동리 태양광발전시설 ',
    },
    {
      협의일: '2018.07.10',
      사업명: '세종특별자치시 첨단산업단지 진입도로 개설사업',
    },
    {
      협의일: '2018.07.03',
      사업명: '안성시 삼죽면 진촌리 태양광발전시설 (㈜○주발전소)',
    },
    {
      협의일: '2018.06.27',
      사업명: '청주시 흥덕구 옥산면 호죽리 공장 (㈜강○○○씨)',
    },
    {
      협의일: '2018.06.20',
      사업명: '홍천군 홍천읍 하오안리 야적장 ',
    },
    {
      협의일: '2018.06.18',
      사업명: '강릉시 주문진읍 향호리 공장부지 증설사업(㈜○서산업개발)',
    },
    {
      협의일: '2018.06.14',
      사업명: '홍천군 동면 좌운리 태양광발전소 및 공작물 설치',
    },
    {
      협의일: '2018.06.01',
      사업명: '강릉시 주문진읍 향호리 태양광발전시설 (㈜케○○○○이, ㈜지○○라',
    },
    {
      협의일: '2018.05.29',
      사업명: '강릉시 강동면 모전리 태양광 발전시설 ',
    },
    {
      협의일: '2018.05.23',
      사업명: '충주시 신니면 마수리 태양광발전시설 (○성2호)',
    },
    {
      협의일: '2018.05.11',
      사업명: '강릉시 주문진읍 향호리 태양광발전시설 ',
    },
    {
      협의일: '2018.05.10',
      사업명: '용인시 처인구 백암면 근삼리 근린생활시설 조성공사',
    },
    {
      협의일: '2018.05.03',
      사업명: '이천시 백사면 송말리 공장 및 도로',
    },
    {
      협의일: '2018.04.10',
      사업명: '홍천군 동면 좌운리 태양광발전소 및 공작물 설치 ',
    },
    {
      협의일: '2018.03.27',
      사업명: '충주시 신니면 문숭리 태양광발전시설 ',
    },
    {
      협의일: '2018.03.26',
      사업명: '강릉시 강동면 모전리 태양광 발전시설 ',
    },
    {
      협의일: '2018.03.06',
      사업명: '음성군 한천 금왕지구 지방하천 정비사업',
    },
    {
      협의일: '2018.03.06',
      사업명: '강릉시 주문진읍 향호리 태양광 발전시설 ',
    },
    {
      협의일: '2018.02.22',
      사업명: '청주시 상당구 가덕면 한계리 개간',
    },
    {
      협의일: '2018.02.08',
      사업명: '괴산군 공공하수처리시설 증설사업',
    },
    {
      협의일: '2018.02.02',
      사업명: '홍천군 서면 반곡리 단독주택 ',
    },
    {
      협의일: '2018.02.01',
      사업명: '청주시 상당구 미원면 용곡리 ㈜보○ 광산(규석) 채광계획변경',
    },
    {
      협의일: '2018.01.29',
      사업명: '제천시 봉양읍 삼거리 공장 ',
    },
    {
      협의일: '2018.01.26',
      사업명: '홍천군 동면 노천리 개간',
    },
    {
      협의일: '2018.01.05',
      사업명: '제천시 송학면 도화리 개간',
    },
    {
      협의일: '2018.01.03',
      사업명: '양양군 답리 제2종 근린생활시설(사무소) ',
    },
    {
      협의일: '2017.12.11',
      사업명: '강릉시 주문진읍 향호리 태양광 발전시설 ',
    },
    {
      협의일: '2017.10.10',
      사업명: '여주시 점동면 처리 태양광발전시설',
    },
    {
      협의일: '2017.09.08',
      사업명: '국도17호선 오창사거리 지하차도 건설공사',
    },
    {
      협의일: '2017.09.06',
      사업명: '충주시 동량면 조동리 태양광 발전시설',
    },
    {
      협의일: '2017.09.05',
      사업명: '안성시 삼죽면 율곡리 태양광 발전시설 (○○하늘 태양광발전소㈜)',
    },
    {
      협의일: '2017.08.28',
      사업명: '홍천군 홍천읍 하오안리 단독주택단지',
    },
    {
      협의일: '2017.07.31',
      사업명: '증평군 허브랜드 조성',
    },
    {
      협의일: '2017.07.24',
      사업명: '충주시 신니면 마수리 태양광발전소',
    },
    {
      협의일: '2017.07.18',
      사업명: '문경시 마성면 모곡리 개간',
    },
    {
      협의일: '2017.06.20',
      사업명: '명신산업 외 1개사 공장 및 도로',
    },
    {
      협의일: '2017.04.07',
      사업명: '제천시 봉양읍 연박리 관광농원',
    },
    {
      협의일: '2017.04.07',
      사업명: '괴산군 청안면 부흥리 공장',
    },
    {
      협의일: '2017.03.03',
      사업명: '여주시 점동면 처리 개간',
    },
    {
      협의일: '2017.01.24',
      사업명: '괴산군 괴산읍 서부리 연립주택(㈜○우엘이디)',
    },
    {
      협의일: '2017.01.24',
      사업명: '제천시 청풍면 연론리 태양광발전소',
    },
    {
      협의일: '2017.01.24',
      사업명: '제천시 봉양읍 삼거리 공장 및 사도개설 ',
    },
    {
      협의일: '2016.12.13',
      사업명:
        '안성시 일죽면 방초리 일원의 ㈜○우산업 제1종 근린생활시설(소매점-건축자재) ',
    },
    {
      협의일: '2016.11.28',
      사업명: '증평군 허브랜드 조성',
    },
    {
      협의일: '2016.11.10',
      사업명:
        '음성군 맹동면 봉현리 ㈜정○리싸이클링 폐기물에너지화 설비 건설사업',
    },
    {
      협의일: '2016.11.08',
      사업명: '충주시 주덕읍 ㈜○산 공장',
    },
    {
      협의일: '2016.10.19',
      사업명: '(합)우○환경산업 및 (자)금○개발 공장',
    },
    {
      협의일: '2016.10.14',
      사업명: '㈜성안 관광휴양단지 및 관광농원 ',
    },
    {
      협의일: '2016.09.22',
      사업명: '정희태양광발전소 발전(태양광)시설 ',
    },
    {
      협의일: '2016.09.19',
      사업명: '생거진천 치유의 숲 조성',
    },
    {
      협의일: '2016.09.09',
      사업명: '홍천 삼마을 리조트 관광농원 ',
    },
    {
      협의일: '2016.09.07',
      사업명: '홍천군 서면 대곡리 전원마을 ',
    },
    {
      협의일: '2016.08.23',
      사업명: '명신산업 외 1개사 공장 및 도로',
    },
    {
      협의일: '2016.07.29',
      사업명: '제천시 덕산면 신현리 태양광발전시설',
    },
    {
      협의일: '2016.07.28',
      사업명: '여주시 금사면 도곡리 한○○ 개간',
    },
    {
      협의일: '2016.07.21',
      사업명: '괴산군 괴산읍 서부리 연립주택',
    },
    {
      협의일: '2016.07.15',
      사업명: '이천시 장호원읍 와현리 개간',
    },
    {
      협의일: '2016.07.14',
      사업명:
        '채정신 외 1인 및 용강호 외 1인 제1종 근린생활시설(소매점) 및 도로',
    },
    {
      협의일: '2016.06.21',
      사업명: '강릉시 왕산면 대기리 개간사업',
    },
    {
      협의일: '2016.06.21',
      사업명: '㈜○원석재 토석채취허가',
    },
    {
      협의일: '2016.06.20',
      사업명: '충주시 산척면 영덕리 ○림산업㈜ 사토장 ',
    },
    {
      협의일: '2016.06.16',
      사업명: '홍천군 남면 제곡리 전원마을 ',
    },
    {
      협의일: '2016.06.10',
      사업명: '금고~비산(2공구) 도로확포장공사',
    },
    {
      협의일: '2016.06.10',
      사업명: '강릉시 왕산면 대기리 발전시설 신축',
    },
    {
      협의일: '2016.06.03',
      사업명: '진천군 이월면 미잠리 야적장 (○강공업㈜)',
    },
    {
      협의일: '2016.06.01',
      사업명: '여주시 가남읍 삼승리 개간',
    },
    {
      협의일: '2016.05.25',
      사업명: '생거진천 치유의 숲 조성',
    },
    {
      협의일: '2016.05.02',
      사업명: '○성레미콘㈜ 공장',
    },
    {
      협의일: '2016.04.11',
      사업명: '성주군 신천 생태하천복원사업',
    },
    {
      협의일: '2016.04.05',
      사업명: '원주시 흥업면 대안리 버섯재배단지 ',
    },
    {
      협의일: '2016.04.05',
      사업명: '㈜금림소재개발 개발행위 및 공유수면 점용ㆍ사용',
    },
    {
      협의일: '2016.04.05',
      사업명: '삼일리 관광농원 개발사업',
    },
    {
      협의일: '2016.03.31',
      사업명:
        '안성시 일죽면 방초리 주식회사 태양농원 판매시설(농산물-버섯) 부지조성공사',
    },
    {
      협의일: '2016.03.22',
      사업명: '안성시 일죽면 방초리 이옥현 제1종근린생활시설(소매점) ',
    },
    {
      협의일: '2016.03.22',
      사업명: '이천시 호법면 매곡리 관광농원 부지조성',
    },
    {
      협의일: '2016.03.04',
      사업명: '평창군 봉평면 진조리 개간사업',
    },
    {
      협의일: '2016.03.04',
      사업명: '홍천군 서면 대곡리 전원마을 ',
    },
    {
      협의일: '2016.02.26',
      사업명: '홍천군 남면 유목정리 농경지(전) ',
    },
    {
      협의일: '2016.01.28',
      사업명: '농업회사법인 해○㈜ 동식물관련시설(축사-계사) 신축',
    },
    {
      협의일: '2016.01.12',
      사업명: '음성군 대소면 부윤리 ○도○앤씨㈜ 공장설립',
    },
    {
      협의일: '2016.01.12',
      사업명: '음성군 삼성면 천평리 한○기업(유) 외 2개사 공장 및 진입로 ',
    },
    {
      협의일: '2016.01.12',
      사업명: '조촌마을권역단위 종합정비사업(원남지 야영장)',
    },
    {
      협의일: '2015.12.31',
      사업명: '여주시 흥천면 다대리 일반창고 (남○철강)',
    },
    {
      협의일: '2015.12.16',
      사업명: '홍천군 서면 굴업리 농경지(전) ',
    },
    {
      협의일: '2015.12.11',
      사업명: '제천군 금성면 월림리 공장설립(고추가루)신축사업',
    },
    {
      협의일: '2015.11.20',
      사업명: '원주시 부론면 단강리 태양광발전소 ',
    },
    {
      협의일: '2015.11.04',
      사업명: '옥천군 군서면소재지 종합정비사업 중 테마연결도로정비',
    },
    {
      협의일: '2015.10.22',
      사업명: '길○하 개간',
    },
    {
      협의일: '2015.10.20',
      사업명: '충주시 신니면 신청리 태양광발전시설 ',
    },
    {
      협의일: '2015.10.16',
      사업명: '여주시 능서면 용은리 개간',
    },
    {
      협의일: '2015.09.18',
      사업명: '왕산면 대기리 풍력발전소 부지조성',
    },
    {
      협의일: '2015.09.18',
      사업명: '류희경 동물 및 식물 관련시설(축사-오리사)',
    },
    {
      협의일: '2015.09.08',
      사업명: '길○하 개간',
    },
    {
      협의일: '2015.08.24',
      사업명: '농업회사법인 해○㈜ 동식물관련시설(축사-계사) 신축',
    },
    {
      협의일: '2015.08.21',
      사업명: '제천덕산(지방도534호선) 도로정비공사',
    },
    {
      협의일: '2015.08.06',
      사업명: '사내면 사창리 태양광 발전시설 설치사업',
    },
    {
      협의일: '2015.07.28',
      사업명: '여주시 강천면 걸은리 개간',
    },
    {
      협의일: '2015.07.24',
      사업명: '물건적치장 명의변경에 따른 변경사업',
    },
    {
      협의일: '2015.06.15',
      사업명: '중○기업㈜ 육상골재 채취사업',
    },
    {
      협의일: '2015.05.20',
      사업명: '홍천군 서면 대곡리 전원마을 ',
    },
    {
      협의일: '2015.04.27',
      사업명: '명봉산 솔밭 관광농원개발사업',
    },
    {
      협의일: '2015.04.09',
      사업명: '종교시설(사찰) 부지조성(요사채 신축 및 주차장 부지조성)사업',
    },
    {
      협의일: '2015.04.08',
      사업명: '횡성군 둔내면 삽교리 물건 적치장 증설에 따른 변경사업',
    },
    {
      협의일: '2015.03.30',
      사업명: '㈜○산 육상골재 채취사업',
    },
    {
      협의일: '2015.03.17',
      사업명: '김○우, 김○우 전원주택단지 ',
    },
    {
      협의일: '2015.02.16',
      사업명: '홍천군 서석면 청량리 우량농경지 부지조성',
    },
    {
      협의일: '2015.02.10',
      사업명: '충주시 동량면 대전리 관광농원개발사업',
    },
    {
      협의일: '2015.02.03',
      사업명: '여주시 가남읍 연대리 개간사업',
    },
    {
      협의일: '2014.12.11',
      사업명: '㈜한국○○카 친환경미네소타 제조공장 ',
    },
    {
      협의일: '2014.11.18',
      사업명: '종교시설 및 진출입로 (대○○○교)',
    },
    {
      협의일: '2014.11.05',
      사업명: '허○ 개간',
    },
    {
      협의일: '2014.11.04',
      사업명: '홍천군 화촌면 구성포리 단독주택 및 버섯재배사 및 진출입로 ',
    },
    {
      협의일: '2014.10.20',
      사업명: '○우씨엠㈜ 자동차관련시설 (주기장)',
    },
    {
      협의일: '2014.10.13',
      사업명: '오○○○칼㈜ 공장 및 진입도로',
    },
    {
      협의일: '2014.09.22',
      사업명: '현암~가산간(시도9호) 도로확포장공사(1공구)',
    },
    {
      협의일: '2014.09.15',
      사업명: '단양 사지원지구 위험도로개량공사',
    },
    {
      협의일: '2014.08.21',
      사업명: '신○호 외 5인 개간사업',
    },
    {
      협의일: '2014.08.01',
      사업명: '○일산업㈜ 레미콘 공장신설',
    },
    {
      협의일: '2014.07.23',
      사업명: '음성군 금왕읍 오선리 창고시설 (○○환경개발㈜)',
    },
    {
      협의일: '2014.07.22',
      사업명: '㈜중○산업 육상골재 채취사업(충주시 대소원면 장성리)',
    },
    {
      협의일: '2014.07.14',
      사업명: '단양 올산도로(대수동) 선형개량공사',
    },
    {
      협의일: '2014.06.19',
      사업명: '가곡면 소재지 종합정비사업(다목적쉼터 )',
    },
    {
      협의일: '2014.06.12',
      사업명: '천안시 동남구 목천읍 송전리 제1종 근린생활시설(소매점) 및 도로',
    },
    {
      협의일: '2014.04.17',
      사업명: '괴산군 불경면 ○○바이오비료주식회사 공장',
    },
    {
      협의일: '2014.04.02',
      사업명: '삼곡~파랑간(군도10호) 도로확포장공사',
    },
    {
      협의일: '2014.03.21',
      사업명: '진천군 덕산면 신척리 개간사업',
    },
    {
      협의일: '2014.03.21',
      사업명: '괴산군 청안면 부흥리 공장설립',
    },
    {
      협의일: '2014.03.10',
      사업명: '㈜○○엘이디 연립주택 ',
    },
    {
      협의일: '2014.03.06',
      사업명: '㈜에스○○&㈜한○ 공장',
    },
    {
      협의일: '2014.02.10',
      사업명: '국도25호선 성주리지내 단구간확장공사',
    },
    {
      협의일: '2013.11.27',
      사업명: '○주환경㈜ 건설폐기물 처리시설 야적장부지',
    },
    {
      협의일: '2013.11.11',
      사업명: '현암~가산간(군도9호선)도로확포장공사(2공구)',
    },
    {
      협의일: '2013.11.06',
      사업명: '한국○○플랜트㈜ 야적장 (변경)',
    },
    {
      협의일: '2013.11.06',
      사업명: '여주시 상교동 ○○레미콘㈜ 야적장 ',
    },
    {
      협의일: '2013.10.23',
      사업명: '남면 시동리 농경지(과) ',
    },
    {
      협의일: '2013.10.15',
      사업명: '원주시 지정면 보통리 자동차매매장 ',
    },
    {
      협의일: '2013.10.14',
      사업명: '㈜○v에스티 사업계획승인신청',
    },
    {
      협의일: '2013.10.07',
      사업명: '서면 두미리 농경지 (전) ',
    },
    {
      협의일: '2013.09.23',
      사업명: '강천섬 권역 농촌마을 종합개발사업(마을공동농산어촌체험시설)',
    },
    {
      협의일: '2013.09.17',
      사업명: '㈜경○테크 공장',
    },
    {
      협의일: '2013.09.13',
      사업명: '상활리 진입도로(가남 208호) 확포장공사',
    },
    {
      협의일: '2013.08.28',
      사업명: '음성군 대소면 대풍리 서보산업 공장부지 증설사업',
    },
    {
      협의일: '2013.08.20',
      사업명: '㈜○우바이오 개간',
    },
    {
      협의일: '2013.08.13',
      사업명: '원주시 흥업면 사제리 창고시설 신축사업',
    },
    {
      협의일: '2013.07.30',
      사업명: '이○순 외 5인 개간사업',
    },
    {
      협의일: '2013.07.10',
      사업명: '주덕 다목적운동장 조성',
    },
    {
      협의일: '2013.06.17',
      사업명: '진천 신월리 ㈜서○레미콘 레미콘플랜트 설치',
    },
    {
      협의일: '2013.06.05',
      사업명: '홍천군 남면 유치리 액비조',
    },
    {
      협의일: '2013.06.05',
      사업명: '㈜코○틸 제3공장 공장',
    },
    {
      협의일: '2013.06.04',
      사업명: '충주시 신니면 ㈜썬○○피 공장',
    },
    {
      협의일: '2013.06.03',
      사업명: '홍천군 서면 모곡리 단독주택 및 근린생활시설 ',
    },
    {
      협의일: '2013.06.03',
      사업명: '홍천군 남면 남노일리 육상골재 채취사업',
    },
    {
      협의일: '2013.03.26',
      사업명: '단양 여천소하천 정비사업',
    },
    {
      협의일: '2013.03.13',
      사업명: '충주시 주덕읍 화곡리 육상골재 채취사업',
    },
    {
      협의일: '2013.03.13',
      사업명: '충주시 주덕읍 화곡리 육상골재 채취사업',
    },
    {
      협의일: '2013.03.11',
      사업명: '강천섬 권역 농촌마을 종합개발사업(마을공동농산어촌체험시설)',
    },
    {
      협의일: '2013.03.05',
      사업명: '단양 올산도로 선형개량공사',
    },
    {
      협의일: '2013.02.25',
      사업명: '영월군 북면 태양광 발전시설 ',
    },
    {
      협의일: '2013.02.22',
      사업명: '여주군농협조합공동법인 창고 부지증설사업',
    },
    {
      협의일: '2013.02.19',
      사업명: '홍천군 남면 남노일리 육상골재(태○개발)',
    },
    {
      협의일: '2013.02.15',
      사업명: '㈜태○ 공장 조성',
    },
    {
      협의일: '2013.01.18',
      사업명: '㈜금○ 공장 조성',
    },
    {
      협의일: '2013.01.10',
      사업명: '원주시 흥업면 사제리 창고시설 신축 ',
    },
    {
      협의일: '2013.01.10',
      사업명: '화천군 간동면 농산물판매점 신축 및 우량농지',
    },
    {
      협의일: '2013.01.10',
      사업명: '윤○원 전원주택지 ',
    },
    {
      협의일: '2013.01.08',
      사업명: '지정면 월송리 단독주택 및 근린생활시설 ',
    },
    {
      협의일: '2012.12.20',
      사업명: '㈜성○ 외 1개사 공장',
    },
    {
      협의일: '2012.12.18',
      사업명: '홍천군 남면 남노일리',
    },
    {
      협의일: '2012.12.10',
      사업명: '일○건설㈜ 전원주택 ',
    },
    {
      협의일: '2012.12.07',
      사업명: '홍천군 내면 자운리 개간사업',
    },
    {
      협의일: '2012.11.22',
      사업명: '대덕지구 지표수보강개발사업',
    },
    {
      협의일: '2012.11.21',
      사업명: '음성군 쌀조합공동사업법인 공장 설립사업',
    },
    {
      협의일: '2012.11.08',
      사업명: '이○형 개간 및 주택',
    },
    {
      협의일: '2012.11.07',
      사업명: '홍천군 내촌면 답풍리 토석채취사업[㈜광○]',
    },
    {
      협의일: '2012.11.06',
      사업명: '춘천시 남산면 산수리 단독주택 및 진입로 ',
    },
    {
      협의일: '2012.11.01',
      사업명: '청원 구방리 동○원자연휴양림 조성계획',
    },
    {
      협의일: '2012.10.31',
      사업명: '충주천(달천) 하도준설사업',
    },
    {
      협의일: '2012.10.16',
      사업명: '김규창 태양광 발전시설 ',
    },
    {
      협의일: '2012.10.15',
      사업명: '괴산군 괴산읍 신항리 주택부지조성 및 사도설치사업',
    },
    {
      협의일: '2012.09.05',
      사업명: '이○순 개간사업',
    },
    {
      협의일: '2012.08.29',
      사업명: '충주시 산척면 영덕리 골재야적장 증설사업[㈜○○레미콘]',
    },
    {
      협의일: '2012.08.28',
      사업명: '㈜○○파일 외 1개사 공장',
    },
    {
      협의일: '2012.08.10',
      사업명: '㈜○○환경 공장부지 조성',
    },
    {
      협의일: '2012.08.08',
      사업명: '○○이엔티㈜ 공장설립사업',
    },
    {
      협의일: '2012.08.02',
      사업명: '월암소하천 정비공사',
    },
  ],
}
