<template>
    <div v-if="report">
        <div class="wrapper">
            <div class="pdf_page">
                <div class="admin-print-box">
                    <div class="flex flex-tj">
                        <div class="print-company-box mr20">
                            <div class="company-logo">
                                <img :src="report.provider.img ? report.provider.img.url : ''">
                                <h2>{{report.company.title}}</h2>
                            </div>
                            <div class="company-info-01">
                                <ul>
                                    <!--<li class="half">
                                        <b class="tit">기업 규모</b>
                                        <p class="cont">{{report.company.title}}</p>
                                    </li>-->
                                    <li class="half">
                                        <b class="tit">대표자</b>
                                        <p class="cont">{{report.company.president}}</p>
                                    </li>
                                    <li>
                                        <b class="tit">사업자 주소</b>
                                        <p class="cont">{{report.company.address}} {{report.company.address_detail}}</p>
                                    </li>
                                    <li>
                                        <b class="tit">사업자 등록 번호</b>
                                        <p class="cont">{{report.company.business_number}}</p>
                                    </li>
                                    <li>
                                        <b class="tit">연락처</b>
                                        <p class="cont">{{report.company.contact}}</p>
                                    </li>
                                    <li>
                                        <b class="tit">사업자 분류</b>
                                        <p class="cont">{{report.company.category}}</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="company-info-02">
                                <ul>
                                    <li v-for="basicAnswer in report.basicAnswers">
                                        <b class="tit">{{basicAnswer.question.options[0].label_before}}</b>
                                        <p class="cont">{{basicAnswer.value[0]}} {{basicAnswer.question.options[0].label_after}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="border-box px30 py30">
                                <div class="graph-box">
                                    <div class="graph-head">
                                        <h2>ESG 진단결과 보고서</h2>
                                        <time>{{report.survey.format_invest_at}}</time>
                                    </div>
                                    <div class="graph-body">
                                        <div class="graph-main">
                                            <img :src="`/asset/images/img_admin_graph_main_0${report.survey.level}.png`">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-tj mt20">
                                <div class="col-12 flex flex-tj">
                                    <div class="border-box flex-1 mr10 mb20 px20 py20">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-02 green">
                                                    <div class="graph-title">
                                                        <h2><b>E</b>환경</h2>
                                                    </div>
                                                    <div class="graph-bar">
                                                        <div class="bar-unit">
                                                            <p>E-1</p>
                                                            <p>E-2</p>
                                                            <p>E-3</p>
                                                            <p>E-4</p>
                                                            <p>E-5</p>
                                                        </div>
                                                        <div class="bar-inner">
                                                            <div class="inner" :style="`width:${levelWidth(report.survey.level_e)}%;`"><em>{{report.survey.level_e}}</em></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-box flex-1 ml10 mb20 px20 py20">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-02 purple">
                                                    <div class="graph-title">
                                                        <h2><b>S</b>노동 및 인권</h2>
                                                    </div>
                                                    <div class="graph-bar">
                                                        <div class="bar-unit">
                                                            <p>E-1</p>
                                                            <p>E-2</p>
                                                            <p>E-3</p>
                                                            <p>E-4</p>
                                                            <p>E-5</p>
                                                        </div>
                                                        <div class="bar-inner">
                                                            <div class="inner" :style="`width:${levelWidth(report.survey.level_s1)}%;`"><em>{{report.survey.level_s1}}</em></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 flex flex-tj">
                                    <div class="border-box flex-1 mr10 px20 py20">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-02 blue">
                                                    <div class="graph-title">
                                                        <h2><b>S</b>안전 및 보건</h2>
                                                    </div>
                                                    <div class="graph-bar">
                                                        <div class="bar-unit">
                                                            <p>E-1</p>
                                                            <p>E-2</p>
                                                            <p>E-3</p>
                                                            <p>E-4</p>
                                                            <p>E-5</p>
                                                        </div>
                                                        <div class="bar-inner">
                                                            <div class="inner" :style="`width:${levelWidth(report.survey.level_s2)}%;`"><em>{{report.survey.level_s2}}</em></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-box flex-1 ml10 px20 py20">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-02 orange">
                                                    <div class="graph-title">
                                                        <h2><b>S</b>사회 및 윤리</h2>
                                                    </div>
                                                    <div class="graph-bar">
                                                        <div class="bar-unit">
                                                            <p>E-1</p>
                                                            <p>E-2</p>
                                                            <p>E-3</p>
                                                            <p>E-4</p>
                                                            <p>E-5</p>
                                                        </div>
                                                        <div class="bar-inner">
                                                            <div class="inner" :style="`width:${levelWidth(report.survey.level_g)}%;`"><em>{{report.survey.level_g}}</em></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-tj mt60">
                        <div class="border-box flex-1 py35 px30 mr20">
                            <div class="print-text-box">
                                <h2>2024 종합 의견</h2>
                                <p>
                                    {{report.survey.comment_total}}
                                </p>
                            </div>
                            <div class="graph-box mt40">
                                <div class="graph-body">
                                    <div class="graph-03 graph-03-05 big">
                                        <div class="inner">
                                            <strong>{{report.survey.score}} <small>/ 100</small></strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div>
                                <div class="print-text-box">
                                    <h2>2024 분야별 평가 요약</h2>
                                    <p>분야별 평가의 만점은 모두 100점입니다. 노동 및 인권, 안전 및 보건은 S에 해당합니다.</p>
                                </div>
                                <div class="flex flex-tj mt16">
                                    <div class="gray-box flex-1 mr16 py20 px10">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-03 graph-03-01">
                                                    <div class="inner">
                                                        <strong>{{report.survey.score_e}}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="graph-foot">
                                                <strong>환경</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-box flex-1 mr16 py20 px10">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-03 graph-03-02">
                                                    <div class="inner">
                                                        <strong>{{report.survey.score_s1}}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="graph-foot">
                                                <strong>노동 및 인권</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-box flex-1 mr16 py20 px10">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-03 graph-03-03">
                                                    <div class="inner">
                                                        <strong>{{report.survey.score_s2}}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="graph-foot">
                                                <strong>안전 및 보건</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gray-box flex-1 py20 px10">
                                        <div class="graph-box">
                                            <div class="graph-body">
                                                <div class="graph-03 graph-03-04">
                                                    <div class="inner">
                                                        <strong>{{report.survey.score_g}}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="graph-foot">
                                                <strong>사회 및 윤리</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt32">
                                <div class="print-text-box">
                                    <h2>기준치</h2>
                                    <p>
                                        기준치: 산업적 특수성에 따라 기업의 ESG 리스크 관리 수준을 평가함에 있어 ‘환경, 인권 및 노동, 윤리 및
                                        지배구조, 제품 및 서비스 책임’의 4가지 부분이 차지하는 중요도의 비중을 말합니다. 가중치는 총점에 해당
                                        부분의 점수가 얼마만큼 반영되는지를 나타냅니다.
                                    </p>
                                </div>
                                <div class="graph-box mt12">
                                    <div class="graph-body">
                                        <div class="graph-04">
                                            <div class="inner">
                                                <span class="graph-04-01" :style="`width:${report.survey.campaign.relative_ratio_e}%;`"></span>
                                                <span class="graph-04-02" :style="`width:${report.survey.campaign.relative_ratio_s1}%;`"></span>
                                                <span class="graph-04-03" :style="`width:${report.survey.campaign.relative_ratio_s2}%;`"></span>
                                                <span class="graph-04-04" :style="`width:${report.survey.campaign.relative_ratio_g}%;`"></span>
                                            </div>
                                            <div class="category">
                                                <ul>
                                                    <li>환경 {{report.survey.campaign.relative_ratio_e}}%</li>
                                                    <li>노동 및 인권 {{report.survey.campaign.relative_ratio_s1}}%</li>
                                                    <li>안전 및 보건 {{report.survey.campaign.relative_ratio_s2}}%</li>
                                                    <li>사회 및 윤리 {{report.survey.campaign.relative_ratio_g}}%</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div>
                <div class="admin-print-box">
                    <div class="print-title-box">
                        <h2>ESG 부분별 평가 결과</h2>
                        <img :src="report.survey.campaign.provider.img ? report.survey.campaign.provider.img.url : ''" alt="">
                    </div>
                    <div class="print-step-box">
                        <div class="print-step-bar"></div>
                        <div class="print-step-list">
                            <ul>
                                <li class="on">
                                    <small>Step 0</small>
                                    <p>진단결과 보고서</p>
                                </li>
                                <li class="active">
                                    <small>Step 1</small>
                                    <p>부분별 평가 결과</p>
                                </li>
                                <li>
                                    <small>Step 2</small>
                                    <p><b>E</b> 환경 평가</p>
                                </li>
                                <li>
                                    <small>Step 3</small>
                                    <p><b>E</b> 환경 상세</p>
                                </li>
                                <li>
                                    <small>Step 4</small>
                                    <p><b>S</b> 사회 평가</p>
                                </li>
                                <li>
                                    <small>Step 5</small>
                                    <p><b>S</b> 사회 상세</p>
                                </li>
                                <li>
                                    <small>Step 6</small>
                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                </li>
                                <li>
                                    <small>Step 7</small>
                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="print-part-box">
                        <ul>
                            <li>
                                <div class="part-left">
                                    <div class="part-left-title">
                                        <h2>환경</h2>
                                        <small>기준치 {{ report.survey.campaign.relative_ratio_e }}%</small>
                                    </div>
                                    <div class="part-left-info">
                                        <dl>
                                            <dd v-for="category in report.domains['ENVIRONMENT'].categories" :key="category.id">
                                                <b>{{ category.title }}</b>
                                                <p>{{ category.result }}</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="part-right">
                                    <div class="flex">
                                        <div class="border-box flex-1 mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-02 green">
                                                        <div class="graph-title">
                                                            <h2><b>E</b>환경</h2>
                                                        </div>
                                                        <div class="graph-bar">
                                                            <div class="bar-unit">
                                                                <p>E-1</p>
                                                                <p>E-2</p>
                                                                <p>E-3</p>
                                                                <p>E-4</p>
                                                                <p>E-5</p>
                                                            </div>
                                                            <div class="bar-inner">
                                                                <div class="inner" :style="`width:${levelWidth(report.survey.level_e)}%;`"><em>{{report.survey.level_e}}</em></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-box mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-01">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.score_e }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gray-box px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-05">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.average_e }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="print-text-box mt12">
                                        <p v-text="report.survey.comment_e"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="part-left">
                                    <div class="part-left-title">
                                        <h2>노동 및 인권</h2>
                                        <small>기준치 {{ report.survey.campaign.relative_ratio_s1 }}%</small>
                                    </div>
                                    <div class="part-left-info">
                                        <dl>
                                            <dd v-for="category in report.domains['SOCIAL1'].categories" :key="category.id">
                                                <b>{{ category.title }}</b>
                                                <p>{{ category.result }}</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="part-right">
                                    <div class="flex">
                                        <div class="border-box flex-1 mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-02 purple">
                                                        <div class="graph-title">
                                                            <h2><b>S</b>노동 및 인권</h2>
                                                        </div>
                                                        <div class="graph-bar">
                                                            <div class="bar-unit">
                                                                <p>E-1</p>
                                                                <p>E-2</p>
                                                                <p>E-3</p>
                                                                <p>E-4</p>
                                                                <p>E-5</p>
                                                            </div>
                                                            <div class="bar-inner">
                                                                <div class="inner" :style="`width:${levelWidth(report.survey.level_s1)}%;`"><em>{{report.survey.level_s1}}</em></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-box mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-02">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.score_s1 }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gray-box px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-06">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.average_s1 }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="print-text-box mt12">
                                        <p v-text="report.survey.comment_s1"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="part-left">
                                    <div class="part-left-title">
                                        <h2>안전 및 보건</h2>
                                        <small>기준치 {{ report.survey.campaign.relative_ratio_s2 }}%</small>
                                    </div>
                                    <div class="part-left-info">
                                        <dl>
                                            <dd v-for="category in report.domains['SOCIAL2'].categories" :key="category.id">
                                                <b>{{ category.title }}</b>
                                                <p>{{ category.result }}</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="part-right">
                                    <div class="flex">
                                        <div class="border-box flex-1 mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-02 blue">
                                                        <div class="graph-title">
                                                            <h2><b>S</b>안전 및 보건</h2>
                                                        </div>
                                                        <div class="graph-bar">
                                                            <div class="bar-unit">
                                                                <p>E-1</p>
                                                                <p>E-2</p>
                                                                <p>E-3</p>
                                                                <p>E-4</p>
                                                                <p>E-5</p>
                                                            </div>
                                                            <div class="bar-inner">
                                                                <div class="inner" :style="`width:${levelWidth(report.survey.level_s2)}%;`"><em>{{report.survey.level_s2}}</em></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-box mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-03">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.score_s2 }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gray-box px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-07">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.average_s2 }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="print-text-box mt12">
                                        <p v-text="report.survey.comment_s2"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="part-left">
                                    <div class="part-left-title">
                                        <h2>사회 및 윤리</h2>
                                        <small>기준치 {{ report.survey.campaign.relative_ratio_g }}%</small>
                                    </div>
                                    <div class="part-left-info">
                                        <dl>
                                            <dd v-for="category in report.domains['GOVERNANCE'].categories" :key="category.id">
                                                <b>{{ category.title }}</b>
                                                <p>{{ category.result }}</p>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="part-right">
                                    <div class="flex">
                                        <div class="border-box flex-1 mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-02 orange">
                                                        <div class="graph-title">
                                                            <h2><b>G</b>사회 및 윤리</h2>
                                                        </div>
                                                        <div class="graph-bar">
                                                            <div class="bar-unit">
                                                                <p>E-1</p>
                                                                <p>E-2</p>
                                                                <p>E-3</p>
                                                                <p>E-4</p>
                                                                <p>E-5</p>
                                                            </div>
                                                            <div class="bar-inner">
                                                                <div class="inner" :style="`width:${levelWidth(report.survey.level_g)}%;`"><em>{{report.survey.level_g}}</em></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-box mr16 px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-04">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.score_g }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gray-box px16 py16">
                                            <div class="graph-box">
                                                <div class="graph-body">
                                                    <div class="graph-03 graph-03-02-08">
                                                        <div class="inner">
                                                            <strong>{{ report.survey.average_g }}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="print-text-box mt12">
                                        <p v-text="report.survey.comment_g"></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div>
                <div class="admin-print-box">
                    <div class="print-title-box">
                        <h2>환경 평가</h2>
                        <img :src="report.survey.campaign.provider.img ? report.survey.campaign.provider.img.url : ''" alt="">
                    </div>
                    <div class="print-step-box">
                        <div class="print-step-bar"></div>
                        <div class="print-step-list">
                            <ul>
                                <li class="on">
                                    <small>Step 0</small>
                                    <p>진단결과 보고서</p>
                                </li>
                                <li class="on">
                                    <small>Step 1</small>
                                    <p>부분별 평가 결과</p>
                                </li>
                                <li class="active">
                                    <small>Step 2</small>
                                    <p><b>E</b> 환경 평가</p>
                                </li>
                                <li>
                                    <small>Step 3</small>
                                    <p><b>E</b> 환경 상세</p>
                                </li>
                                <li>
                                    <small>Step 4</small>
                                    <p><b>S</b> 사회 평가</p>
                                </li>
                                <li>
                                    <small>Step 5</small>
                                    <p><b>S</b> 사회 상세</p>
                                </li>
                                <li>
                                    <small>Step 6</small>
                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                </li>
                                <li>
                                    <small>Step 7</small>
                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="print-result-box mt30">
                        <div class="result-left">
                            <div class="result-left-title">
                                <strong>평가 지표</strong>
                            </div>
                            <div class="border-box px20 py20 mt15">
                                <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['ENVIRONMENT'].categories" :key="category.id">
                                    <div class="graph-body">
                                        <div class="graph-05">
                                            <div class="category">
                                                <p>{{ category.title }}</p>
                                                <b>{{ category.result }}</b>
                                            </div>
                                            <div class="inner"><div :style="`width:${category.result}%;`"></div></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="gray-box mt20 px10 py20">
                                    <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['ENVIRONMENT'].categories" :key="category.id">
                                        <div class="graph-body">
                                            <div class="graph-05">
                                                <div class="category">
                                                    <p>{{ category.title }}</p>
                                                    <b>{{ category.format_level }}</b>
                                                </div>
                                                <div class="inner"><div :style="`width:${category.result}%;`"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="result-right">
                            <div class="result-right-top">
                                <ul>
                                    <li>
                                        <div>
                                            <div class="right-top-tit">점수</div>
                                            <div class="right-top-score">
                                                <b>{{ report.survey.score_e }}</b>
                                                <small>/ 100</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div class="right-top-tit">등급</div>
                                            <div class="right-top-score">
                                                <b>E-{{report.survey.level_e}}</b>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div class="right-top-tit">가중치</div>
                                            <div class="right-top-score">
                                                <b>{{ report.survey.campaign.relative_ratio_e }}%</b>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="print-text-box mt12">
                                    <p v-text="report.survey.comment_e"></p>
                                </div>
                            </div>
                            <div class="result-right-title mt40">
                                <strong>환경 데이터 요약</strong>
                            </div>

                            <div class="result-right-table" v-if="report.domains['ENVIRONMENT'].numbers.length > 0">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>항목</th>
                                        <th>2022</th>
                                        <th>2023</th>
                                        <th class="active">2024</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>에너지 사용량 (TJ)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>온실가스 배출량(tCO2-eq)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>용수 사용량(TON)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>원부자재 사용량(TON)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>대기오염물질 배출량(TON)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>수질오염물질 배출량(TON)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>화학물질 사용량(kg)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    <tr>
                                        <td>폐기물 발생량(TON)</td>
                                        <td>362.63</td>
                                        <td>395.55</td>
                                        <td class="active">401.59</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="result-right-table" v-else style="display:flex; align-items:center; justify-content:center; height:340px; margin-top:20px; text-align: center; font-size:20px; color:#999; background-color:#F7F7F7; border-radius:12px;">
                                데이터가 없습니다.
                            </div>
                            <div class="result-right-title mt40">
                                <strong>우수사항 및 미흡사항</strong>
                            </div>
                            <div class="flex">
                                <div class="border-box flex-1 mr16 px20 py20">
                                    <div class="result-right-title mb12">
                                        <strong class="f18">우수사항</strong>
                                    </div>
                                    <div class="gray-box px20 py20" style="min-height:300px;">
                                        {{report.survey.good_e}}
                                    </div>
                                </div>
                                <div class="border-box flex-1 px20 py20">
                                    <div class="result-right-title mb12">
                                        <strong class="f18">미흡사항</strong>
                                    </div>
                                    <div class="gray-box px20 py20" style="min-height:300px;">
                                        {{report.survey.bad_e}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div>
                <div class="admin-print-box">
                    <div class="print-title-box">
                        <h2>환경 평가</h2>
                        <img :src="report.survey.campaign.provider.img ? report.survey.campaign.provider.img.url : ''" alt="">
                    </div>
                    <div class="print-step-box">
                        <div class="print-step-bar"></div>
                        <div class="print-step-list">
                            <ul>
                                <li class="on">
                                    <small>Step 0</small>
                                    <p>진단결과 보고서</p>
                                </li>
                                <li class="on">
                                    <small>Step 1</small>
                                    <p>부분별 평가 결과</p>
                                </li>
                                <li class="on">
                                    <small>Step 2</small>
                                    <p><b>E</b> 환경 평가</p>
                                </li>
                                <li class="active">
                                    <small>Step 3</small>
                                    <p><b>E</b> 환경 상세</p>
                                </li>
                                <li>
                                    <small>Step 4</small>
                                    <p><b>S</b> 사회 평가</p>
                                </li>
                                <li>
                                    <small>Step 5</small>
                                    <p><b>S</b> 사회 상세</p>
                                </li>
                                <li>
                                    <small>Step 6</small>
                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                </li>
                                <li>
                                    <small>Step 7</small>
                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="print-view-box">
                        <div class="view-head">
                            <h2><b>E</b>항목별 진단결과 및 개선의견</h2>
                            <dl>
                                <dd>
                                    <b>전체 항목 수</b>
                                    <p>23</p>
                                </dd>
                                <dd>
                                    <b>긍정 항목 수</b>
                                    <p>13</p>
                                </dd>
                                <dd>
                                    <b>긍정 항목 비중</b>
                                    <p>57%</p>
                                </dd>
                            </dl>
                        </div>
                        <div class="view-body">
                            <div class="view-body-title">
                                <strong>사회 진단결과 및 개선의견</strong>
                                <em>보통</em>
                            </div>
                            <div class="view-body-list">
                                <ul>
                                    <li>
                                        <div class="view-list-tit">
                                            <em>01</em>
                                            <div>
                                                <p>유효기간 내 인적자원 관련 인증을 보유하고 있습니까?</p>
                                                <b>아니오</b>
                                            </div>
                                        </div>
                                        <div class="view-list-cont">
                                            <dl>
                                                <dd>
                                                    <b>개선 포인트</b>
                                                    <p>인적자원 관련 인증 취득 노력 필요</p>
                                                </dd>
                                                <dd>
                                                    <b>준비자료</b>
                                                    <p>인적자원 관련 인증서</p>
                                                </dd>
                                                <dd>
                                                    <b>개선 의견</b>
                                                    <p>
                                                        인적자원 관련 인증으로는 고용노동부 등에서 승인하는 강소기업, 가족친화기업, 고령화친화기업, 일자리으뜸기업, 인권경영시스템 등이 있으며, 일하기 좋은 일터를 인증해주는 것으로 우수 인력 유치를 위해 관련 인증을 취득하는 것도 바람직합니다.
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="view-list-tit">
                                            <em>02</em>
                                            <div>
                                                <p>유효기간 내 산업안전(ISO 45001 / KOSHA-MS, 위험성평가인정서 등) 관련 인증을 1개 이상 보유하고 있습니까?</p>
                                                <b>아니오</b>
                                            </div>
                                        </div>
                                        <div class="view-list-cont">
                                            <dl>
                                                <dd>
                                                    <b>개선 포인트</b>
                                                    <p>산업안전 관련 인증서 취득 노력 필요</p>
                                                </dd>
                                                <dd>
                                                    <b>준비자료</b>
                                                    <p>산업안전 관련 인증서 및 위험성평가인정서</p>
                                                </dd>
                                                <dd>
                                                    <b>개선 의견</b>
                                                    <p>
                                                        ISO 45001은 산업안전보건경영시스템을 위한 국제 표준입니다. 기존의 OHSAS 18001은 ISO 45001로 전환(2018년)되었고 이에 따라 KOSHA 18001 또한 KOSHA-MS로 대체(2019년)되었습니다. 산업안전보건경영시스템은 조직의 규모, 산업 및 지리적 위치에 상관없이 사업장 관련 리스크를 줄이고, 직원의 건강, 안전 및 복지를 위한 체계적인 프레임워크를 통해 조직의 안전보건 목표를 달성하도록 하는 데 그 목적이 있습니다. 아울러, 산업재해 관련 안전사고예방을 위한 인증 중 위험성평가는 사업장의 유해·위험요인을 파악하고 해당 유해·위험요인에 의한 부상 또는 질병의 발생 가능성(빈도)와 중대성(강도)을 추정·결정하고 감소 대책을 수립하여 실행하는 일련의 과정을 말합니다. 산업안전 관련 위험성이 높은 업종일수록 관련 인증을 획득하여 산업재해를 예방하고 안전한 작업환경을 조성해야 할 것입니다.
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="view-list-tit">
                                            <em>03</em>
                                            <div>
                                                <p>품질 관련 인증[ISO 9001, TS 16949, TL 9000, KS, KC, CE, HACCP 등]을 1개 이상 보유하고 있습니까?</p>
                                                <b>아니오</b>
                                            </div>
                                        </div>
                                        <div class="view-list-cont">
                                            <dl>
                                                <dd>
                                                    <b>개선 포인트</b>
                                                    <p>품질 관련 인증서 취득 노력 필요</p>
                                                </dd>
                                                <dd>
                                                    <b>준비자료</b>
                                                    <p>품질 관련 인증서</p>
                                                </dd>
                                                <dd>
                                                    <b>개선 의견</b>
                                                    <p>
                                                        ISO 45001은 산업안전보건경영시스템을 위한 국제 표준입니다. 기존의 OHSAS 18001은 ISO 45001로 전환(2018년)되었고 이에 따라 KOSHA 18001 또한 KOSHA-MS로 대체(2019년)되었습니다. 산업안전보건경영시스템은 조직의 규모, 산업 및 지리적 위치에 상관없이 사업장 관련 리스크를 줄이고, 직원의 건강, 안전 및 복지를 위한 체계적인 프레임워크를 통해 조직의 안전보건 목표를 달성하도록 하는 데 그 목적이 있습니다. 아울러, 산업재해 관련 안전사고예방을 위한 인증 중 위험성평가는 사업장의 유해·위험요인을 파악하고 해당 유해·위험요인에 의한 부상 또는 질병의 발생 가능성(빈도)와 중대성(강도)을 추정·결정하고 감소 대책을 수립하여 실행하는 일련의 과정을 말합니다. 산업안전 관련 위험성이 높은 업종일수록 관련 인증을 획득하여 산업재해를 예방하고 안전한 작업환경을 조성해야 할 것입니다.
                                                    </p>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="view-foot">
                            <img src="/asset/images/img_print_view_logo.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <div>
                <div class="admin-print-box">
                    <div class="print-title-box">
                        <h2><img src="/asset/images/img_print_title_logo.png"></h2>
                        <img :src="report.survey.campaign.provider.img ? report.survey.campaign.provider.img.url : ''" alt="">
                    </div>
                    <div class="print-intro-box">
                        <h2>ESG란 무엇인가요?</h2>
                        <dl>
                            <dd>환경(Environment), 사회(Social), 지배구조(Governance)의 약칭</dd>
                            <dd>
                                과거 비재무적 요소였던 환경, 사회, 지배구조가 전세계 기업과 주요 금융기관, 주주들의 핵심가치로 주목 받으면서, 지속가능경영과 투자를 위해 기업이 필수적으로 이행해야 하는 핵심경영전략
                            </dd>
                        </dl>
                    </div>
                    <div class="print-end-box">
                        <div class="end-left">
                            <h3>ESG평가 신청방법</h3>
                            <dl>
                                <dd>1 www.krating.co.kr 접속</dd>
                                <dd>2 로그인(비회원인 경우 회원가입 필요)</dd>
                                <dd>3 평가신청→ 4 상품별 신청</dd>
                                <dd>5 ESG평가용 보고서 선택→ 6 바로 신청 클릭</dd>
                            </dl>
                        </div>
                        <div class="end-right">
                            <div class="print-title-box">
                                <h2 class="f26">ESG 평가가 왜 필요한가요?</h2>
                            </div>
                            <div class="print-text-box dot">
                                <p>
                                    전세계적으로 ESG(환경, 사회, 지배구조)에 대한 중요성 대두, 국내에서도 금융기관,
                                    대기업 중심으로 여신심사, 협력업체 평가에 ESG 경영상태를 반영하는 추세 확대
                                </p>
                                <p>차후 확대되는 ESG 등급 활용에 대비하여 자사의 ESG 등급 관리 필요</p>
                                <p>
                                    기업의 재무적 성과만이 아니라 환경보호, 사회적 책임, 적정한 지배구조 등
                                    비재무적인 요소를 고려하여 판단
                                </p>
                            </div>
                            <div class="print-issue-box mt40">
                                <ul>
                                    <li>
                                        <strong>환경 이슈</strong>
                                        <dl>
                                            <dd>환경 경영</dd>
                                            <dd>오염물질</dd>
                                            <dd>에너지, 온실가스</dd>
                                            <dd>지원관리 등</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <strong>사회 이슈</strong>
                                        <dl>
                                            <dd>인적자원관리</dd>
                                            <dd>정보보호</dd>
                                            <dd>근로환경</dd>
                                            <dd>사회공헌 등</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <strong>지배구조<br>이슈</strong>
                                        <dl>
                                            <dd>공정거래부패방지</dd>
                                            <dd>이사회, 감사기구</dd>
                                            <dd>지분구조 등</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style>
    .pdf_page {
        background-color: #fff;
    }

    @media screen and (max-width: 768px) {
        .pdf_page {
            padding: 10px 0;
        }
    }
</style>
<script>
import Form from "@/utils/Form";
export default {
    head() {
        return {
            link: [
                {rel: 'stylesheet', type: 'text/css', href: '/asset/css/admin.css'},

            ],
        }
    },

    middleware: ["user"],

    layout: "empty",

    components: {},

    data() {
        return {
            report: null,

            form: new Form(this.$axios, {
         
            }),
        }
    },

    methods: {
        getReport(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/reports", {
                params: {
                    survey_id: this.$route.query.survey_id,
                }
            }).then(response => {
                this.report = response.data.data;

                this.$nextTick(() => {
                    const chart1 = document.querySelector('.graph-03-01');
                    const chart2 = document.querySelector('.graph-03-02');
                    const chart3 = document.querySelector('.graph-03-03');
                    const chart4 = document.querySelector('.graph-03-04');
                    const chart5 = document.querySelector('.graph-03-05');

                    const chart6 = document.querySelector('.graph-03-02-01');
                    const chart7 = document.querySelector('.graph-03-02-02');
                    const chart8 = document.querySelector('.graph-03-02-03');
                    const chart9 = document.querySelector('.graph-03-02-04');

                    const chart10 = document.querySelector('.graph-03-02-05');
                    const chart11 = document.querySelector('.graph-03-02-06');
                    const chart12 = document.querySelector('.graph-03-02-07');
                    const chart13 = document.querySelector('.graph-03-02-08');



                    const makeChart = (percent, classname, color) => {
                        let i = 1;
                        let chartFn = setInterval(function() {
                            if (i < percent) {
                                colorFn(i, classname, color);
                                i++;
                            } else {
                                clearInterval(chartFn);
                            }
                        }, 10);
                    }

                    const colorFn = (i, classname, color) => {
                        if(classname == chart5){
                            classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #f7f7f7 " + i + "% 100%)";
                        }else{
                            classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #fff " + i + "% 100%)";
                        }
                    }

                    makeChart(this.report.survey.score_e, chart1, '#4A51FF');
                    makeChart(this.report.survey.score_s1, chart2, '#5090F5');
                    makeChart(this.report.survey.score_s2, chart3, '#FC952F');
                    makeChart(this.report.survey.score_g, chart4, '#1592E6');
                    makeChart(this.report.survey.score, chart5, '#56D13F');

                    makeChart(this.report.survey.score_e, chart6, '#56D13F');
                    makeChart(this.report.survey.score_s1, chart7, '#4A51FF');
                    makeChart(this.report.survey.score_s2, chart8, '#5090F5');
                    makeChart(this.report.survey.score_g, chart9, '#FC952F');

                    makeChart(this.report.survey.average_e, chart10, '#E4E4E4');
                    makeChart(this.report.survey.average_s1, chart11, '#E4E4E4');
                    makeChart(this.report.survey.average_s2, chart12, '#E4E4E4');
                    makeChart(this.report.survey.average_g, chart13, '#E4E4E4');
                });
            })
        },

        levelWidth(level){
            if(level == 1)
                return 1.7;

            if(level == 2)
                return 24;

            if(level == 3)
                return 50;

            if(level == 4)
                return 74;

            if(level == 5)
                return 99;
        },
    },

    computed: {

    },

    mounted() {
        this.getReport();

        /*
        if($("html").width() < 700){
            this.contWidth = 100;
        }
        $("html, body").css("overflow", "auto");
        $("html, body").css("height", "auto");
        */
    }
}
</script>
