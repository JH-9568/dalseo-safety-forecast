export type RiskLevel = '안정' | '관심' | '주의' | '위험';
export type RiskType = '침수·배수' | '불법주정차' | '무단투기' | '야간시설' | '폭염·한파';

export type RiskForecast = {
  id: string;
  area: string;
  type: RiskType;
  level: RiskLevel;
  expectedTime: string;
  reasons: string[];
  actions: string[];
  departments: string[];
  residentNotice: string;
  checklist: string[];
};

export const riskTypes: Array<'전체' | RiskType> = [
  '전체',
  '침수·배수',
  '불법주정차',
  '무단투기',
  '야간시설',
  '폭염·한파',
];

export const riskForecasts: RiskForecast[] = [
  {
    id: 'wolsung-drainage',
    area: '월성동 배수 취약구역',
    type: '침수·배수',
    level: '위험',
    expectedTime: '오늘 16:00~20:00',
    reasons: ['강수 예보와 우천 시간대가 겹침', '과거 우천 시 배수 민원 반복', '최근 30일 유사 신고 4건'],
    actions: ['배수로 사전 점검', '저지대 보행 안내', '주민 안내문 발송'],
    departments: ['재난·안전', '환경·청소'],
    residentNotice:
      '오늘 오후 비가 예상됩니다. 월성동 일부 구간은 과거 우천 시 배수 관련 신고가 반복된 지역입니다. 보행 및 차량 이동 시 안전에 유의해주시기 바랍니다.',
    checklist: ['배수로 막힘 여부 확인', '저지대 보행 안내 표식 점검', '우천 전 주민 안내문 발송'],
  },
  {
    id: 'sangin-school-road',
    area: '상인동 학교 앞 도로',
    type: '불법주정차',
    level: '주의',
    expectedTime: '오늘 15:00~18:00',
    reasons: ['하교 시간대 반복 신고', '인근 학원가 차량 집중', '최근 유사 민원 증가'],
    actions: ['단속 인력 우선 배치', '보행 안전 안내', '임시 주정차 자제 안내'],
    departments: ['교통', '안전'],
    residentNotice:
      '오늘 오후 상인동 학교 앞 도로는 하교 시간대 차량 집중이 예상됩니다. 어린이 보행 안전을 위해 임시 주정차를 자제하고 주변 공영주차장을 이용해주시기 바랍니다.',
    checklist: ['하교 시간대 단속 위치 지정', '통학로 보행 방해 요소 확인', '학원가 주정차 안내문 게시'],
  },
  {
    id: 'duryu-alley-waste',
    area: '두류동 골목 생활권',
    type: '무단투기',
    level: '주의',
    expectedTime: '오늘 20:00~23:00',
    reasons: ['수거 전날 반복 민원', '야간 시간대 신고 집중', '생활폐기물 관련 민원 증가'],
    actions: ['수거 동선 조정', '안내문 부착', '순찰 우선순위 등록'],
    departments: ['환경·청소'],
    residentNotice:
      '오늘 밤 두류동 일부 골목에서 생활폐기물 무단투기 신고 가능성이 높게 예측됩니다. 지정된 배출 시간과 장소를 지켜주시고, 불편 사항은 관할 부서 안내에 따라 신고해주시기 바랍니다.',
    checklist: ['수거 전 취약 골목 확인', '배출 안내문 부착 상태 점검', '야간 순찰 후보지 등록'],
  },
  {
    id: 'bonri-park-night',
    area: '본리동 어린이공원',
    type: '야간시설',
    level: '관심',
    expectedTime: '오늘 19:00~22:00',
    reasons: ['야간 조명 관련 신고 이력', '공원 이용 시간대와 겹침', '시설물 점검 필요 신호 감지'],
    actions: ['조명 작동 여부 확인', '시설물 안전 점검', '야간 이용 안내'],
    departments: ['공원·시설', '안전'],
    residentNotice:
      '오늘 저녁 본리동 어린이공원 이용이 늘어날 것으로 예상됩니다. 조명 및 시설물 점검이 진행될 수 있으니 현장 안내에 협조해주시기 바랍니다.',
    checklist: ['공원 조명 점등 상태 확인', '놀이시설 파손 여부 점검', '야간 이용 안내문 확인'],
  },
  {
    id: 'songhyeon-heat',
    area: '송현동 고령자 밀집 생활권',
    type: '폭염·한파',
    level: '주의',
    expectedTime: '오늘 12:00~17:00',
    reasons: ['체감온도 상승 예상', '고령자 생활권과 겹침', '무더위쉼터 안내 필요'],
    actions: ['폭염 행동요령 안내', '무더위쉼터 정보 제공', '취약계층 안부 확인'],
    departments: ['복지', '재난·안전'],
    residentNotice:
      '오늘 낮 송현동 일대는 체감온도 상승이 예상됩니다. 장시간 야외활동을 피하고 가까운 무더위쉼터 정보를 확인해주시기 바랍니다.',
    checklist: ['무더위쉼터 운영 정보 확인', '취약계층 안부 확인 대상 점검', '폭염 행동요령 안내 발송'],
  },
  {
    id: 'yongsan-commerce-parking',
    area: '용산동 상가 밀집구역',
    type: '불법주정차',
    level: '관심',
    expectedTime: '오늘 18:00~21:00',
    reasons: ['퇴근 시간대 교통 혼잡', '상가 방문 차량 증가 예상', '주차 관련 민원 이력'],
    actions: ['인근 주차장 안내', '혼잡 시간대 안내', '단속 후보지 등록'],
    departments: ['교통'],
    residentNotice:
      '오늘 저녁 용산동 상가 밀집구역은 방문 차량 증가로 혼잡이 예상됩니다. 가까운 주차장을 이용하고 보행로 주변 정차를 자제해주시기 바랍니다.',
    checklist: ['혼잡 시간대 안내 문구 점검', '주차장 안내 동선 확인', '민원 반복 구간 단속 후보 등록'],
  },
  {
    id: 'igok-station-cold',
    area: '이곡동 도시철도역 주변',
    type: '폭염·한파',
    level: '관심',
    expectedTime: '내일 07:00~09:00',
    reasons: ['출근 시간대 체감온도 하락 예측', '역 주변 보행량 증가', '미끄럼 주의 안내 필요'],
    actions: ['출근길 안전 안내', '취약 보행 구간 확인', '버스정류장 주변 점검'],
    departments: ['교통', '재난·안전'],
    residentNotice:
      '내일 아침 이곡동 도시철도역 주변은 체감온도 하락이 예상됩니다. 출근길 보행 시 미끄럼과 한랭 질환에 유의해주시기 바랍니다.',
    checklist: ['역 주변 보행로 상태 확인', '버스정류장 안내문 점검', '출근 시간대 안전 안내 송출'],
  },
];

