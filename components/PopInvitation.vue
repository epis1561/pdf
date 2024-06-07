
<template>
    <div class="m-pop type01">
        <section class="m-pop-inner">
            <div class="container">
                <div class="sub-box">
                    <div class="sub-right-box">
                        <div class="mypage-right">
                            <div class="title-box">
                                <h2>직원초대</h2>
                            </div>
                            <div class="board-write-box">
                                <ul>
                                    <li>
                                        <div class="write-content">
                                            <div class="content-group">
                                                <div class="group-title">
                                                    <h3>직원 이메일</h3>
                                                </div>
                                                <div class="group-content">
                                                    <div class="input-box">
                                                        <input type="text" placeholder="초대하실 직원의 이메일을 입력해주세요.">
                                                        <a href="" class="btn gray">초대하기</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="mypage-table-box">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>부서</th>
                                        <th>직급</th>
                                        <th>이름</th>
                                        <th>이메일</th>
                                        <th>등록일자</th>
                                        <th>관리</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>마케팅 팀</td>
                                        <td>정직원</td>
                                        <td>김철수</td>
                                        <td>esgi1234@gmail.com</td>
                                        <td>2024.05.31</td>
                                        <td><a href="" class="select">선택</a></td>
                                    </tr>
                                    <tr>
                                        <td>마케팅 팀</td>
                                        <td>정직원</td>
                                        <td>김철수</td>
                                        <td>esgi1234@gmail.com</td>
                                        <td>2024.05.31</td>
                                        <td><a href="" class="select">선택</a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="button-box mt40">
                                <div class="w400 flex-lg-1 mr24 mr-lg-10">
                                    <a href="" class="btn btn-lightgray bdr4 lg" @click.prevent="close">취소</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
</template>
<script>
import Form from "../utils/Form";
export default {
    data(){
        return {

        }
    },

    methods: {
        close() {
            this.$emit('close');
        }
    },

    computed: {

    },

    watch: {

    },

    mounted() {

    }
}
</script>
