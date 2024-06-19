<template>
    <div v-if="report">
        <div class="swiper m-viewer type01">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!-- 진단결과 보고서 -->
                        <div class="wrapper report-index">
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
                                                    <template v-for="basicAnswer in report.basicAnswers">
                                                        <li v-for="(option,index) in basicAnswer.question.options" :key="option.id">
                                                            <b class="tit">{{option.label_before}}</b>
                                                            <p class="cont">{{basicAnswer.value[index]}} {{option.label_after}}</p>
                                                        </li>
                                                    </template>

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
                                    <div class="flex flex-tj mt40">
                                        <div class="total-comment border-box flex-1 py35 px30 mr20">
                                            <div class="print-text-box">
                                                <h2>{{report.survey.campaign.year}} 종합 의견</h2>
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
                                        <div class="total-graph flex-1">
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
                    </div>

                    <div class="swiper-slide">
                        <!-- 부분별 평가 결과 -->
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
                                                    <p><b>S1</b> 노동 및 인권 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 5</small>
                                                    <p><b>S1</b> 노동 및 인권 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 6</small>
                                                    <p><b>S2</b> 안전 및 보건 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 7</small>
                                                    <p><b>S2</b> 안전 및 보건 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 8</small>
                                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 9</small>
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
                    </div>

                    <div class="swiper-slide">
                        <!-- 환경 평가 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-view-box">
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
                                                        <p><b>S</b> 노동 및 인권 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 5</small>
                                                        <p><b>S</b> 노동 및 인권 상세</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 6</small>
                                                        <p><b>S</b> 안전 및 보건 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 7</small>
                                                        <p><b>S</b> 안전 및 보건 상세</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 8</small>
                                                        <p><b>G</b> 사회 및 윤리 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 9</small>
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
<!--                                                <div class="result-right-title mt40">
                                                    <strong>환경 데이터 요약</strong>
                                                </div>-->

                                                <div class="result-right-table" v-if="report.domains['ENVIRONMENT'].numbers.length > 0">
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>항목</th>
                                                            <th v-for="(year, index) in years" :key="year" :class="index === years.length - 1 ? 'active' : ''">{{year}}</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="number in report.domains['ENVIRONMENT'].numbers" :key="number.id">
                                                            <td>{{number.question.options.length > 0 ? `${number.question.options[0].data_title} (${number.question.options[0].data_unit})` : ''}}</td>
                                                            <td v-for="(valueData, index) in number.invest_value" :key="index" :class="index === number.invest_value.length - 1 ? 'active' : ''">{{valueData}}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="result-right-table empty" v-else>
                                                    데이터가 없습니다.
                                                </div>
                                            </div>

                                            <div class="view-foot"><img src="/asset/images/img_print_view_logo.png"></div>
                                        </div>

                                        <div class="print-result-box mt20">
                                            <div class="flex" style="width:100%;">
                                                <div class="border-box flex-1 mr16 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">우수사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.good_e}}</div>
                                                </div>
                                                <div class="border-box flex-1 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">미흡사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.bad_e}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide" v-for="(section, sectionIndex) in answers['ENVIRONMENT'].sections" :key="sectionIndex">
                        <!-- 환경 평가 개선과제 -->
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
                                                    <p><b>S</b> 노동 및 인권 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 5</small>
                                                    <p><b>S</b> 노동 및 인권 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 6</small>
                                                    <p><b>S</b> 안전 및 보건 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 7</small>
                                                    <p><b>S</b> 안전 및 보건 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 8</small>
                                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 9</small>
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
                                                    <b>응답 항목 수</b>
                                                    <p>{{report.domains['ENVIRONMENT'].answers.length}}</p>
                                                </dd>
                                                <dd>
                                                    <b>점수</b>
                                                    <p>{{report.survey.score_e}}</p>
                                                </dd>
                                                <dd>
                                                    <b>등급</b>
                                                    <p>E-{{report.survey.level_e}}</p>
                                                </dd>
                                                <!--<dd>
                                                    <b>긍정 항목 비중</b>
                                                    <p>57%</p>
                                                </dd>-->
                                            </dl>
                                        </div>
                                        <div class="view-body">
                                            <div class="view-body-title">
                                                <strong>환경 진단결과 및 개선의견</strong>
                                                <em :class="`level${report.survey.level_e}`">{{report.survey.format_level_e}}</em>
                                            </div>
                                            <div class="view-body-list">
                                                <ul>
                                                    <li v-for="(answer, answerIndex) in section" :key="answer.id">
                                                        <div class="view-list-tit">
                                                            <em>{{formatOrder(sectionIndex, answerIndex)}}</em>
                                                            <div>
                                                                <p>{{answer.question.title}}</p>
                                                                <b>{{answer.format_invest_value}}</b>
                                                            </div>
                                                        </div>
                                                        <div class="view-list-cont">
                                                            <dl>
                                                                <dd>
                                                                    <b>주요 확인 내용</b>
                                                                    <p>{{answer.comment_invest}}</p>
                                                                </dd>
                                                                <!--<dd>
                                                                    <b>준비자료</b>
                                                                    <p>인적자원 관련 인증서</p>
                                                                </dd>-->
                                                                <dd>
                                                                    <b>확인 근거자료</b>
                                                                    <p>{{answer.comment_improve}}</p>
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
                    </div>

                    <div class="swiper-slide">
                        <!-- 노동 및 인권 평가 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-view-box">
                                        <div class="print-title-box">
                                            <h2>노동 및 인권 평가</h2>
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
                                                    <li class="on">
                                                        <small>Step 3</small>
                                                        <p><b>E</b> 환경 상세</p>
                                                    </li>
                                                    <li class="active">
                                                        <small>Step 4</small>
                                                        <p><b>S</b> 노동 및 인권 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 5</small>
                                                        <p><b>S</b> 노동 및 인권 상세</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 6</small>
                                                        <p><b>S</b> 안전 및 보건 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 7</small>
                                                        <p><b>S</b> 안전 및 보건 상세</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 8</small>
                                                        <p><b>G</b> 사회 및 윤리 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 9</small>
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
                                                    <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['SOCIAL1'].categories" :key="category.id">
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
                                                        <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['SOCIAL1'].categories" :key="category.id">
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
                                                                    <b>{{ report.survey.score_s1 }}</b>
                                                                    <small>/ 100</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">등급</div>
                                                                <div class="right-top-score">
                                                                    <b>E-{{report.survey.level_s1}}</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">가중치</div>
                                                                <div class="right-top-score">
                                                                    <b>{{ report.survey.campaign.relative_ratio_s1 }}%</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="print-text-box mt12">
                                                        <p v-text="report.survey.comment_s1"></p>
                                                    </div>
                                                </div>
<!--                                                <div class="result-right-title mt40">
                                                    <strong>노동 및 인권 데이터 요약</strong>
                                                </div>-->

                                                <div class="result-right-table" v-if="report.domains['SOCIAL1'].numbers.length > 0">
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>항목</th>
                                                            <th v-for="(year, index) in years" :key="year" :class="index === years.length - 1 ? 'active' : ''">{{year}}</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="number in report.domains['SOCIAL1'].numbers" :key="number.id">
                                                            <td>{{number.question.options.length > 0 ? `${number.question.options[0].data_title} (${number.question.options[0].data_unit})` : ''}}</td>
                                                            <td v-for="(valueData, index) in number.invest_value" :key="index" :class="index === number.invest_value.length - 1 ? 'active' : ''">{{valueData}}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="result-right-table empty" v-else>
                                                    데이터가 없습니다.
                                                </div>

                                            </div>

                                            <div class="view-foot"><img src="/asset/images/img_print_view_logo.png"></div>
                                        </div>

                                        <div class="print-result-box mt20">
                                            <div class="flex" style="width:100%;">
                                                <div class="border-box flex-1 mr16 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">우수사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.good_s1}}</div>
                                                </div>
                                                <div class="border-box flex-1 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">미흡사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.bad_s1}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" v-for="(section, sectionIndex) in answers['SOCIAL1'].sections" :key="sectionIndex">
                        <!-- 노동 및 인권 평가 개선과제 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-title-box">
                                        <h2>노동 및 인권 평가</h2>
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
                                                <li class="on">
                                                    <small>Step 3</small>
                                                    <p><b>E</b> 환경 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 4</small>
                                                    <p><b>S</b> 노동 및 인권 평가</p>
                                                </li>
                                                <li class="active">
                                                    <small>Step 5</small>
                                                    <p><b>S</b> 노동 및 인권 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 6</small>
                                                    <p><b>S</b> 안전 및 보건 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 7</small>
                                                    <p><b>S</b> 안전 및 보건 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 8</small>
                                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 9</small>
                                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="print-view-box">
                                        <div class="view-head">
                                            <h2><b>S</b>항목별 진단결과 및 개선의견</h2>
                                            <dl>
                                                <dd>
                                                    <b>응답 항목 수</b>
                                                    <p>{{report.domains['SOCIAL1'].answers.length}}</p>
                                                </dd>
                                                <dd>
                                                    <b>점수</b>
                                                    <p>{{report.survey.score_s1}}</p>
                                                </dd>
                                                <dd>
                                                    <b>등급</b>
                                                    <p>E-{{report.survey.level_s1}}</p>
                                                </dd>
                                                <!--<dd>
                                                    <b>긍정 항목 비중</b>
                                                    <p>57%</p>
                                                </dd>-->
                                            </dl>
                                        </div>
                                        <div class="view-body">
                                            <div class="view-body-title">
                                                <strong>노동 및 인권 진단결과 및 개선의견</strong>
                                                <em :class="`level${report.survey.level_s1}`">{{report.survey.format_level_s1}}</em>
                                            </div>
                                            <div class="view-body-list">
                                                <ul>
                                                    <li v-for="(answer, answerIndex) in section" :key="answer.id">
                                                        <div class="view-list-tit">
                                                            <em>{{formatOrder(sectionIndex, answerIndex)}}</em>
                                                            <div>
                                                                <p>{{answer.question.title}}</p>
                                                                <b>{{answer.format_invest_value}}</b>
                                                            </div>
                                                        </div>
                                                        <div class="view-list-cont">
                                                            <dl>
                                                                <dd>
                                                                    <b>주요 확인 내용</b>
                                                                    <p>{{answer.comment_invest}}</p>
                                                                </dd>
                                                                <!--<dd>
                                                                    <b>준비자료</b>
                                                                    <p>인적자원 관련 인증서</p>
                                                                </dd>-->
                                                                <dd>
                                                                    <b>확인 근거자료</b>
                                                                    <p>{{answer.comment_improve}}</p>
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

                    </div>

                    <div class="swiper-slide">
                        <!-- 안전 및 보건 평가 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-view-box">
                                        <div class="print-title-box">
                                            <h2>안전 및 보건 평가</h2>
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
                                                    <li class="on">
                                                        <small>Step 3</small>
                                                        <p><b>E</b> 환경 상세</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 4</small>
                                                        <p><b>S</b> 노동 및 인권 평가</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 5</small>
                                                        <p><b>S</b> 노동 및 인권 상세</p>
                                                    </li>
                                                    <li class="active">
                                                        <small>Step 6</small>
                                                        <p><b>S</b> 안전 및 보건 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 7</small>
                                                        <p><b>S</b> 안전 및 보건 상세</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 8</small>
                                                        <p><b>G</b> 사회 및 윤리 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 9</small>
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
                                                    <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['SOCIAL2'].categories" :key="category.id">
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
                                                        <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['SOCIAL2'].categories" :key="category.id">
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
                                                                    <b>{{ report.survey.score_s2 }}</b>
                                                                    <small>/ 100</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">등급</div>
                                                                <div class="right-top-score">
                                                                    <b>E-{{report.survey.level_s2}}</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">가중치</div>
                                                                <div class="right-top-score">
                                                                    <b>{{ report.survey.campaign.relative_ratio_s2 }}%</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="print-text-box mt12">
                                                        <p v-text="report.survey.comment_s2"></p>
                                                    </div>
                                                </div>
<!--                                                <div class="result-right-title mt40">
                                                    <strong>안전 및 보건 데이터 요약</strong>
                                                </div>-->

                                                <div class="result-right-table" v-if="report.domains['SOCIAL2'].numbers.length > 0">
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>항목</th>
                                                            <th v-for="(year, index) in years" :key="year" :class="index === years.length - 1 ? 'active' : ''">{{year}}</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="number in report.domains['SOCIAL2'].numbers" :key="number.id">
                                                            <td>{{number.question.options.length > 0 ? `${number.question.options[0].data_title} (${number.question.options[0].data_unit})` : ''}}</td>
                                                            <td v-for="(valueData, index) in number.invest_value" :key="index" :class="index === number.invest_value.length - 1 ? 'active' : ''">{{valueData}}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="result-right-table empty" v-else>
                                                    데이터가 없습니다.
                                                </div>
                                            </div>

                                            <div class="view-foot"><img src="/asset/images/img_print_view_logo.png"></div>
                                        </div>

                                        <div class="print-result-box mt20">
                                            <div class="flex" style="width:100%;">
                                                <div class="border-box flex-1 mr16 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">우수사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.good_s2}}</div>
                                                </div>
                                                <div class="border-box flex-1 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">미흡사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.bad_s2}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" v-for="(section, sectionIndex) in answers['SOCIAL2'].sections" :key="sectionIndex">
                        <!-- 안전 및 보건 평가 개선과제 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-title-box">
                                        <h2>안전 및 보건 평가</h2>
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
                                                <li class="on">
                                                    <small>Step 3</small>
                                                    <p><b>E</b> 환경 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 4</small>
                                                    <p><b>S</b> 노동 및 인권 평가</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 5</small>
                                                    <p><b>S</b> 노동 및 인권 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 6</small>
                                                    <p><b>S</b> 안전 및 보건 평가</p>
                                                </li>
                                                <li class="active">
                                                    <small>Step 7</small>
                                                    <p><b>S</b> 안전 및 보건 상세</p>
                                                </li>
                                                <li>
                                                    <small>Step 8</small>
                                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                                </li>
                                                <li>
                                                    <small>Step 9</small>
                                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="print-view-box">
                                        <div class="view-head">
                                            <h2><b>S</b>항목별 진단결과 및 개선의견</h2>
                                            <dl>
                                                <dd>
                                                    <b>응답 항목 수</b>
                                                    <p>{{report.domains['SOCIAL2'].answers.length}}</p>
                                                </dd>
                                                <dd>
                                                    <b>점수</b>
                                                    <p>{{report.survey.score_s2}}</p>
                                                </dd>
                                                <dd>
                                                    <b>등급</b>
                                                    <p>E-{{report.survey.level_s2}}</p>
                                                </dd>
                                                <!--<dd>
                                                    <b>긍정 항목 비중</b>
                                                    <p>57%</p>
                                                </dd>-->
                                            </dl>
                                        </div>
                                        <div class="view-body">
                                            <div class="view-body-title">
                                                <strong>노동 및 인권 진단결과 및 개선의견</strong>
                                                <em :class="`level${report.survey.level_s2}`">{{report.survey.format_level_s2}}</em>
                                            </div>
                                            <div class="view-body-list">
                                                <ul>
                                                    <li v-for="(answer, answerIndex) in section" :key="answer.id">
                                                        <div class="view-list-tit">
                                                            <em>{{formatOrder(sectionIndex, answerIndex)}}</em>
                                                            <div>
                                                                <p>{{answer.question.title}}</p>
                                                                <b>{{answer.format_invest_value}}</b>
                                                            </div>
                                                        </div>
                                                        <div class="view-list-cont">
                                                            <dl>
                                                                <dd>
                                                                    <b>주요 확인 내용</b>
                                                                    <p>{{answer.comment_invest}}</p>
                                                                </dd>
                                                                <!--<dd>
                                                                    <b>준비자료</b>
                                                                    <p>인적자원 관련 인증서</p>
                                                                </dd>-->
                                                                <dd>
                                                                    <b>확인 근거자료</b>
                                                                    <p>{{answer.comment_improve}}</p>
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
                    </div>

                    <div class="swiper-slide">
                        <!-- 사회 및 윤리 평가 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-view-box">
                                        <div class="print-title-box">
                                            <h2>사회 및 윤리 평가</h2>
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
                                                    <li class="on">
                                                        <small>Step 3</small>
                                                        <p><b>E</b> 환경 상세</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 4</small>
                                                        <p><b>S</b> 노동 및 인권 평가</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 5</small>
                                                        <p><b>S</b> 노동 및 인권 상세</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 6</small>
                                                        <p><b>S</b> 안전 및 보건 평가</p>
                                                    </li>
                                                    <li class="on">
                                                        <small>Step 7</small>
                                                        <p><b>S</b> 안전 및 보건 상세</p>
                                                    </li>
                                                    <li class="active">
                                                        <small>Step 8</small>
                                                        <p><b>G</b> 사회 및 윤리 평가</p>
                                                    </li>
                                                    <li>
                                                        <small>Step 9</small>
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
                                                    <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['GOVERNANCE'].categories" :key="category.id">
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
                                                        <div :class="`graph-box ${index === 0 ? '' : 'mt15'}`" v-for="(category, index) in report.domains['GOVERNANCE'].categories" :key="category.id">
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
                                                                    <b>{{ report.survey.score_g }}</b>
                                                                    <small>/ 100</small>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">등급</div>
                                                                <div class="right-top-score">
                                                                    <b>E-{{report.survey.level_g}}</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <div class="right-top-tit">가중치</div>
                                                                <div class="right-top-score">
                                                                    <b>{{ report.survey.campaign.relative_ratio_g }}%</b>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="print-text-box mt12">
                                                        <p v-text="report.survey.comment_g"></p>
                                                    </div>
                                                </div>
<!--                                                <div class="result-right-title mt40">
                                                    <strong>사회 및 윤리 데이터 요약</strong>
                                                </div>-->

                                                <div class="result-right-table" v-if="report.domains['GOVERNANCE'].numbers.length > 0">
                                                    <table>
                                                        <thead>
                                                        <tr>
                                                            <th>항목</th>
                                                            <th v-for="(year, index) in years" :key="year" :class="index === years.length - 1 ? 'active' : ''">{{year}}</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="number in report.domains['GOVERNANCE'].numbers" :key="number.id">
                                                            <td>{{number.question.options.length > 0 ? `${number.question.options[0].data_title} (${number.question.options[0].data_unit})` : ''}}</td>
                                                            <td v-for="(valueData, index) in number.invest_value" :key="index" :class="index === number.invest_value.length - 1 ? 'active' : ''">{{valueData}}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="result-right-table empty" v-else>
                                                    데이터가 없습니다.
                                                </div>

                                            </div>

                                            <div class="view-foot"><img src="/asset/images/img_print_view_logo.png"></div>
                                        </div>

                                        <div class="print-result-box mt20">
                                            <div class="flex" style="width:100%;">
                                                <div class="border-box flex-1 mr16 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">우수사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.good_g}}</div>
                                                </div>
                                                <div class="border-box flex-1 px20 py20">
                                                    <div class="result-right-title mb12">
                                                        <strong class="f18">미흡사항</strong>
                                                    </div>
                                                    <div class="box-like-comment gray-box px20 py20">{{report.survey.bad_g}}</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" v-for="(section, sectionIndex) in answers['GOVERNANCE'].sections" :key="sectionIndex">
                        <!-- 사회 및 평가 개선과제 -->
                        <div class="wrapper">
                            <div>
                                <div class="admin-print-box">
                                    <div class="print-title-box">
                                        <h2>사회 및 윤리 평가</h2>
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
                                                <li class="on">
                                                    <small>Step 3</small>
                                                    <p><b>E</b> 환경 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 4</small>
                                                    <p><b>S</b> 노동 및 인권 평가</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 5</small>
                                                    <p><b>S</b> 노동 및 인권 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 6</small>
                                                    <p><b>S</b> 안전 및 보건 평가</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 7</small>
                                                    <p><b>S</b> 안전 및 보건 상세</p>
                                                </li>
                                                <li class="on">
                                                    <small>Step 8</small>
                                                    <p><b>G</b> 사회 및 윤리 평가</p>
                                                </li>
                                                <li class="active">
                                                    <small>Step 9</small>
                                                    <p><b>G</b> 사회 및 윤리 상세</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="print-view-box">
                                        <div class="view-head">
                                            <h2><b>G</b>항목별 진단결과 및 개선의견</h2>
                                            <dl>
                                                <dd>
                                                    <b>응답 항목 수</b>
                                                    <p>{{report.domains['GOVERNANCE'].answers.length}}</p>
                                                </dd>
                                                <dd>
                                                    <b>점수</b>
                                                    <p>{{report.survey.score_g}}</p>
                                                </dd>
                                                <dd>
                                                    <b>등급</b>
                                                    <p>E-{{report.survey.level_g}}</p>
                                                </dd>
                                                <!--<dd>
                                                    <b>긍정 항목 비중</b>
                                                    <p>57%</p>
                                                </dd>-->
                                            </dl>
                                        </div>
                                        <div class="view-body">
                                            <div class="view-body-title">
                                                <strong>사회 및 윤리 진단결과 및 개선의견</strong>
                                                <em :class="`level${report.survey.level_g}`">{{report.survey.format_level_g}}</em>
                                            </div>
                                            <div class="view-body-list">
                                                <ul>
                                                    <li v-for="(answer, answerIndex) in section" :key="answer.id">
                                                        <div class="view-list-tit">
                                                            <em>{{formatOrder(sectionIndex, answerIndex)}}</em>
                                                            <div>
                                                                <p>{{answer.question.title}}</p>
                                                                <b>{{answer.format_invest_value}}</b>
                                                            </div>
                                                        </div>
                                                        <div class="view-list-cont">
                                                            <dl>
                                                                <dd>
                                                                    <b>주요 확인 내용</b>
                                                                    <p>{{answer.comment_invest}}</p>
                                                                </dd>
                                                                <!--<dd>
                                                                    <b>준비자료</b>
                                                                    <p>인적자원 관련 인증서</p>
                                                                </dd>-->
                                                                <dd>
                                                                    <b>확인 근거자료</b>
                                                                    <p>{{answer.comment_improve}}</p>
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
                    </div>

                    <div class="swiper-slide">
                        <!-- 푸터 페이지 -->
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
                                                <dd>1. www.example.co.kr 접속</dd>
                                                <dd>2. 문의접수</dd>
                                                <dd>3. 평가신청</dd>
                                                <dd>4. 진단 및 보고서</dd>
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
                </div>
            </div>

            <div class="controller-top active">
                <div class="logo">
                    <img :src="report.survey.campaign.provider.img ? report.survey.campaign.provider.img.url : ''" alt="">
                </div>
                <h3 class="title">{{report.survey.campaign.title}}</h3>
                <button type="button" class="btn-close" @click.prevent="() => {$router.back()}">
                    <i class="xi-log-out"></i>
                </button>
            </div>
            <div class="controller-bottom active">
                <div class="box-gage">
                    <div class="gage">
                        <div class="active"></div>
                    </div>

                    <div class="page">
                        <span class="active">1</span>
                        <span>/</span>
                        <span class="total">1</span>
                    </div>
                </div>

                <div class="btns">
                    <button class="btn btn-expand" @click.prevent="download">
                        <i class="xi-download"></i>
                    </button>
                    <button class="btn btn-expand">
                        <i class="xi-expand"></i>
                    </button>
                    <button class="btn btn-prev">
                        <i class="xi-angle-left"></i>
                    </button>
                    <button class="btn btn-next">
                        <i class="xi-angle-right"></i>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
<style>

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

            swiper: null,

            answers: {
                "ENVIRONMENT": {
                    sections: [], // 3문제씩 분할용
                },
                "SOCIAL1": {
                    sections: [],  // 3문제씩 분할용
                },
                "SOCIAL2": {
                    sections: [],  // 3문제씩 분할용
                },
                "GOVERNANCE": {
                    sections: [],  // 3문제씩 분할용
                },
            }
        }
    },

    methods: {
        download(){

        },

        ready(){
            return alert("준비중입니다.");
        },

        getReport(){
            this.$store.commit("setLoading", true);

            this.$axios.get("/api/reports", {
                params: {
                    survey_id: this.$route.query.survey_id,
                }
            }).then(response => {
                this.report = response.data.data;

                this.splitAnswers();

                this.$nextTick(() => {
                    this.drawChart();

                    this.initSwiper();
                });
            })
        },

        initSwiper(){
            //메인 배너 슬라이드
            this.swiper =  new Swiper(".swiper .swiper-container", {
                navigation: {
                    nextEl: '.swiper .btn-next',
                    prevEl: '.swiper .btn-prev',
                },
                on: {
                    slideChange: function () {
                        $(".controller-bottom .page .active").text(this.activeIndex + 1);

                        let total = $(".swiper-slide").length;

                        if(total === 0)
                            return 0;

                        let progress = Math.floor((this.activeIndex + 1) / total * 100);
                        console.log(total, this.activeIndex, progress);

                        $(".controller-bottom .box-gage .active").css('max-width', `${progress}%`);
                    }
                }
            });

            $(".controller-bottom .total").text($(".swiper-slide").length);

            $(".swiper-slide").click(function(){
                $(".controller-bottom, .controller-top").toggleClass("active");
            });

            $(".btn-expand").click(function(){
                let element = document.documentElement;

                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) { /* Firefox */
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) { /* IE/Edge */
                    element.msRequestFullscreen();
                }
            });
        },

        formatOrder(sectionIndex, answerIndex){
            let order = 0;

            order = (sectionIndex * 3) + (answerIndex + 1);

            if(order < 10)
                return "0" + order;

            return order;
        },

        splitAnswers(){
            let sectionCount = 0;

            sectionCount = Math.ceil(this.report.domains["ENVIRONMENT"].answers.length / 3);

            this.answers["ENVIRONMENT"].sections = this.chunkArray(this.report.domains["ENVIRONMENT"].answers, 3);
            this.answers["SOCIAL1"].sections = this.chunkArray(this.report.domains["SOCIAL1"].answers, 3);
            this.answers["SOCIAL2"].sections = this.chunkArray(this.report.domains["SOCIAL2"].answers, 3);
            this.answers["GOVERNANCE"].sections = this.chunkArray(this.report.domains["GOVERNANCE"].answers, 3);
        },

        chunkArray(items, size){
            let result = [];

            for(let i = 0; i < items.length; i += size){
                result.push(items.slice(i, i + size));
            }

            console.log(result);

            return result;
        },

        drawChart(){
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

        years(){
            let year = this.report.survey.campaign.year;

            return [year - 2, year - 1, year];
        },
    },

    beforeDestroy(){

    },

    mounted() {
        this.getReport();
        $("html,body").css("overflow-x", "hidden");

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
