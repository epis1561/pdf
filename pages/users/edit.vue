<template>

        <div class="mypage-right area-users-edit">
            <div class="title-box">
                <h2>회원정보 수정</h2>
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
                                    <h3>비밀번호</h3>
                                </div>

                                <div class="group-content">
                                    <div class="button-box" v-if="!isPassword">
                                        <a href="" class="btn btn-black lg h50 bdr4 flex-1 f18 f-lg-14" @click.prevent="showPassword">비밀번호 변경</a>
                                    </div>
                                    <div v-show="isPassword">
                                    <div class="content-group">
                                        <div class="group-content">
                                            <div class="input-box">
                                                <input type="password" placeholder="변경할 비밀번호를 입력해주세요." v-model="form.password">
                                            </div>
                                            <error :form="form" name="password" />
                                        </div>
                                    </div>
                                    <div class="content-group">
                                        <div class="group-content">
                                            <div class="input-box">
                                                <input type="password" placeholder="비밀번호를 다시 입력해주세요." v-model="form.password_confirmation">

                                            </div>
                                            <error :form="form" name="password_confirmation" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li v-if="user.company">
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
                                        <error :form="form" name="company_name" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-group">
                                <div class="group-title">
                                    <h3>대표자 명</h3>
                                </div>
                                <div class="group-content">
                                    <div class="input-box">
                                        <input type="text" placeholder="대표자 명을 입력해주세요." v-model="form.company_president">
                                        <error :form="form" name="company_president" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-group">
                                <div class="group-title">
                                    <h3>대표자 연락처</h3>
                                </div>
                                <div class="group-content">
                                    <div class="input-box">
                                        <input type="text" placeholder="대표자 연락처를 입력해주세요." v-model="form.company_contact" @input="clearLetter">
                                        <error :form="form" name="company_contact" />
                                    </div>
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
                                    <h3>업종</h3>
                                </div>
                                <div class="group-content">
                                    <div class="input-box">
                                        <input type="text" placeholder="업종을 입력해주세요." v-model="form.company_category">
                                        <error :form="form" name="company_category" />
                                    </div>
                                </div>
                            </div>

                            <div class="content-group">
                                <div class="group-title">
                                    <h3>주소</h3>
                                </div>
                                <div class="group-content">
                                    <input-address address="company_address" address_detail="company_address_detail" address_zipcode="company_address_zipcode" @change="(data) => form[data.name] = data.value" :form="form" />
                                    <error :form="form" name="company_address" />
                                </div>
                            </div>

                            <div class="content-group">
                                <div class="group-title">
                                    <h3>기업 로고 이미지(배경이 투명한 .png파일 권장)</h3>
                                </div>
                                <div class="group-content">
                                    <input-images :default="user.company.img ? [user.company.img] : ''" @change="data => form.company_img = data" />
                                    <error :form="form" name="company_img" />
                                </div>
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
                                        <error :form="form" name="name" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-group">
                                <div class="group-title">
                                    <h3>담당자 연락처</h3>
                                </div>
                                <div class="group-content">
                                    <div class="input-box">
                                        <input type="text" placeholder="담당자 연락처를 입력해주세요." v-model="form.contact" @input="clearLetter">
                                        <error :form="form" name="contact" />
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
                                        <error :form="form" name="email" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-group">
                                <div class="group-title">
                                    <h3>SMS 수신동의</h3>
                                </div>
                                <div class="group-content">
                                    <div class="flex flex-vc mt25 mt-lg-15">
                                        <div class="check-basic-box mr60 mr-lg-30">
                                            <input type="radio" name="radio01" value="1" id="radio01_01" v-model="form.agree_sms_promotion">
                                            <label for="radio01_01"><p>동의</p></label>
                                        </div>
                                        <div class="check-basic-box">
                                            <input type="radio" name="radio01" value="0" id="radio01_02" v-model="form.agree_sms_promotion">
                                            <label for="radio01_02"><p>동의 안함</p></label>
                                        </div>
                                        <error :form="form" name="agree_sms_promotion" />
                                    </div>
                                </div>
                            </div>
                            <div class="content-group">
                                <div class="group-title">
                                    <h3>이메일 수신동의</h3>
                                </div>
                                <div class="group-content">
                                    <div class="flex flex-vc mt25 mt-lg-15">
                                        <div class="check-basic-box mr60 mr-lg-30">
                                            <input type="radio" name="radio02" value="1" id="radio02_01" v-model="form.agree_email_promotion">
                                            <label for="radio02_01"><p>동의</p></label>
                                        </div>
                                        <div class="check-basic-box">
                                            <input type="radio" name="radio02" value="0" id="radio02_02" v-model="form.agree_email_promotion">
                                            <label for="radio02_02"><p>동의 안함</p></label>
                                        </div>
                                        <error :form="form" name="agree_email_promotion" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>
            <div class="button-box mt40">
                <div class="w400 flex-lg-1">
                    <a href="" class="btn btn-skyblue bdr4 lg" @click.prevent="store">수정 완료</a>
                </div>
            </div>
        </div>

</template>
<style>

</style>
<script>
import Form from "~/utils/Form";

export default {

    middleware: ["user"],
    layout: "mypage",
    data(){
        return {
            isPassword:false,
            form: new Form(this.$axios, {
                // 공용 (기업, 개인 다 입력받는 정보)
                password: "", // 비밀번호 (선택입력)
                password_confirmation: "", // 비밀번호 확인 (선택입력)
                name: this.$auth.user.data.name, // 담당자명
                contact: this.$auth.user.data.contact, // 연락처 - 입력 시 숫자만 남도록 처리 필요 (코드찾기로 clearLetter 검색해서 작업 참고)
                department: this.$auth.user.data.department, // 부서
                position: this.$auth.user.data.position, // 직급
                email: this.$auth.user.data.email, // 이메일
                agree_sms_promotion: this.$auth.user.data.agree_sms_promotion, // SMS 수신동의여부 (0 - 거절 시 , 1 - 수락 시)
                agree_email_promotion: this.$auth.user.data.agree_email_promotion, // EMAIL 수신동의여부 (0 - 거절 시 , 1 - 수락 시)

                // 기업회원만 입력 받는 정보
                company_size : this.$auth.user.data.company.size,
                company_name : this.$auth.user.data.company.title,
                company_president: this.$auth.user.data.company.president,
                company_contact: this.$auth.user.data.company.contact, // 회사 연락처 - 입력 시 숫자만 남도록 처리 필요 (코드찾기로 clearLetter 검색해서 작업 참고)
                company_category: this.$auth.user.data.company.category, // 업종

                company_address: this.$auth.user.data.company.address,
                company_address_detail: this.$auth.user.data.company.address_detail,
                company_address_zipcode: this.$auth.user.data.company.address_zipcode,

                company_img: [], // 기업 로고 이미지
            })
        }
    },

    methods: {
        store(){


            this.$store.commit("setLoading", true);

            this.form.patch("/api/users")
                    .then(response => {
                this.$store.commit("setPop", {
                    description: "성공적으로 처리되었습니다."
                })
                }).catch(error => {

                })

        },
        clearLetter(){
            this.form.contact = this.form.contact.replace("-", "");
        },
        showPassword() {
            this.isPassword = true;
        }
    },

    computed: {
        user(){
            return this.$auth.user.data;
        }
    },

    watch: {

    },

    mounted() {

        console.log(this.$auth.user.data);


    }
}
</script>


