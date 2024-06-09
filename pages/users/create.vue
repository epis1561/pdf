<template>
    <section class="area-users-create">
        <div class="container">
            <div class="sub-box">
                <div class="sub-right-box">
                    <div class="inner-box lg">
                        <div class="title-box">
                            <h2>회원가입</h2>
                            <p class="mt13 mt-lg-10 col-12">ESGi를 방문해주신 것을 환영합니다.</p>
                        </div>
                        <div class="step-box mt48 mt-lg-24">
                            <ul>
                                <li class="active">
                                    <em>Step 1</em>
                                    <div class="bar"></div>
                                    <p>약관동의</p>
                                </li>
                                <li class="active">
                                    <em>Step 2</em>
                                    <div class="bar"></div>
                                    <p>정보입력</p>
                                </li>
                                <li>
                                    <em>Step 3</em>
                                    <div class="bar"></div>
                                    <p>가입완료</p>
                                </li>
                            </ul>
                        </div>
                        <div class="board-write-box mt50 mt-lg-30">
                            <ul>
                                <li>
                                    <div class="write-title">
                                        <h2>기본정보</h2>
                                    </div>
                                    <div class="write-content">
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>아이디</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="아이디를 입력해주세요." v-model="form.ids">

                                                </div>
                                                <error :form="form" name="ids" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>비밀번호</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="password" placeholder="비밀번호를 입력해주세요." v-model="form.password">

                                                </div>
                                                <error :form="form" name="password" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>비밀번호 확인</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="password" placeholder="비밀번호를 다시 입력해주세요." v-model="form.password_confirmation">

                                                </div>
                                                <error :form="form" name="password_confirmation" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li v-if="form.category == 'COMPANY'">
                                    <div class="write-title">
                                        <h2>사업자 정보</h2>
                                    </div>
                                    <div class="write-content">
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>기업명</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="기업명을 입력해주세요." v-model="form.company_name">

                                                </div>
                                                <error :form="form" name="company_name" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>사업자 등록번호</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="사업자등록번호를 입력해주세요." v-model="form.company_business_number">
                                                </div>
                                                    <error :form="form" name="company_business_number" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>기업형태</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="select-box">
                                                    <select v-model="form.company_size">
                                                        <option value="" disabled>기업형태를 선택해주세요.</option>
                                                        <option value="대기업">대기업</option>
                                                        <option value="중견기업">중견기업</option>
                                                        <option value="중소기업">중소기업</option>
                                                    </select>
                                                </div>
                                                    <error :form="form" name="company_size" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>대표자 명</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="대표자 명을 입력해주세요." v-model="form.company_president">
                                                </div>
                                                    <error :form="form" name="company_president" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>회사 연락처</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="회사 연락처를 입력해주세요." v-model="form.company_contact">
                                                </div>
                                                    <error :form="form" name="company_contact" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>사업장 주소</h3>
                                            </div>

                                            <input-address address="company_address" address_detail="company_address_detail" address_zipcode="company_address_zipcode" @change="(data) => form[data.name] = data.value" :form="form" />
                                            <error :form="form" name="company_address" />
                                        </div>

                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>업종</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="업종을 입력해주세요." v-model="form.company_category">
                                                </div>
                                                    <error :form="form" name="company_category" />
                                            </div>
                                        </div>

                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>기업 로고 이미지(배경이 투명한 .png 파일 권장)</h3>
                                            </div>
                                           <input-images @change="data => {form.company_img = data}"></input-images>
                                            <error :form="form" name="imgs" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="write-title">
                                        <h2>담당자 정보</h2>
                                    </div>
                                    <div class="write-content">
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>담당자 명</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="담당자 명을 입력해주세요." v-model="form.name">
                                                </div>
                                                    <error :form="form" name="name" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>담당자 연락처</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
<!--                                                    <input type="text" placeholder="담당자 연락처를 입력해주세요." v-model="form.contact">-->
                                                    <input-verify-number @verified="data => form.contact = data" />
                                                    <error :form="form" name="contact" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>부서</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="부서명을 입력해주세요." v-model="form.department">
                                                    </div>
                                                    <error :form="form" name="department" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>직급</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="직급을 입력해주세요." v-model="form.position">
                                                    </div>
                                                    <error :form="form" name="position" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>담당자 이메일</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="input-box">
                                                    <input type="text" placeholder="담당자 이메일을 입력해주세요." v-model="form.email">
                                                </div>
                                                    <error :form="form" name="email" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>SMS 수신동의</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="flex flex-vc mt25 mt-lg-15">
                                                    <div class="check-basic-box mr60 mr-lg-30">
                                                        <input type="radio" name="radio01" id="radio01_01" value="1" v-model="form.agree_sms_promotion">
                                                        <label for="radio01_01"><p>동의</p></label>
                                                    </div>
                                                    <div class="check-basic-box">
                                                        <input type="radio" name="radio01" id="radio01_02" value="0" v-model="form.agree_sms_promotion">
                                                        <label for="radio01_02"><p>동의 안함</p></label>
                                                    </div>
                                                </div>
                                                <error :form="form" name="agree_sms_promotion" />
                                            </div>
                                        </div>
                                        <div class="content-group">
                                            <div class="group-title">
                                                <h3>이메일 수신동의</h3>
                                            </div>
                                            <div class="group-content">
                                                <div class="flex flex-vc mt25 mt-lg-15">
                                                    <div class="check-basic-box mr60 mr-lg-30">
                                                        <input type="radio" name="radio02" id="radio02_01" value="1" v-model="form.agree_email_promotion">
                                                        <label for="radio02_01"><p>동의</p></label>
                                                    </div>
                                                    <div class="check-basic-box">
                                                        <input type="radio" name="radio02" id="radio02_02" value="0" v-model="form.agree_email_promotion">
                                                        <label for="radio02_02"><p>동의 안함</p></label>
                                                    </div>
                                                </div>
                                                <error :form="form" name="agree_email_promotion" />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div class="button-box mt40">
                            <div class="w400 flex-lg-1">
                                <a href="" class="btn btn-skyblue bdr4 lg" @click.prevent="store">다음</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {
    data(){
        return {
            step: 1,
            form: new Form(this.$axios, {
                // 공용 (기업, 개인 다 입력받는 정보)
                ids: "", // 아이디
                category: this.$route.query.category, // 유형 (COMPANY - 기업, PERSONAL - 개인)
                password: "", // 비밀번호
                password_confirmation: "", // 비밀번호 확인

                name: "", // 담당자명
                contact: "", // 연락처 - 입력 시 숫자만 남도록 처리 필요 (코드찾기로 clearLetter 검색해서 작업 참고)
                department: "", // 부서
                position: "", //직급
                email: "", // 이메일
                agree_sms_promotion: 1, // SMS 수신동의여부 (0 - 거절 시 , 1 - 수락 시)
                agree_email_promotion: 1, // EMAIL 수신동의여부 (0 - 거절 시 , 1 - 수락 시)

                // 기업회원만 입력 받는 정보
                company_name : "",
                company_size: "", // 기업규모 (대기업, 중견기업, 중소기업)
                company_business_number : "",
                company_president: "",
                company_contact: "", // 회사 연락처 - 입력 시 숫자만 남도록 처리 필요 (코드찾기로 clearLetter 검색해서 작업 참고)
                company_category: "", // 업종

                company_address: "",
                company_address_detail: "",
                company_address_zipcode: "",


                company_img: [], // 기업 로고 이미지


            })
        }
    },

    methods: {
        store(){


            this.$store.commit("setLoading", true);

            this.form.post("/api/users")
                    .then(response => {
                        this.$router.push("/users/successCreate");
                    }).catch(error => {

            })
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {
       this.form.type = this.$route.query.type || "PERSONAL";
    }
}
</script>


