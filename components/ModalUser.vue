<template>
    <div class="modal-container">
        <div class="modal-wrap client-popup other-party-info-wrap">
            <i class="xi-close-thin" @click="close"></i>
            <div class="other-party-info-top" v-if="user">
                <div class="img-box">
                    <img :src="user.img ? user.img.url : '/images/basic-user.png'" alt="" />
                </div>
                <p class="title">
                    {{ user.company_name }}
                </p>
                <p class="career">
                    경력 {{ user.career_year }}년 {{user.career_month}}개월
                </p>
                <div class="review-score-wrap">
                    <div class="review-star-wrap star-5">
                        <div class="review-star review-star-off"></div>
                        <div class="review-star review-star-on" :style="`width:${user.average_score / 5 * 100}%;`">
                            <!-- style="width: 00% 로 별점 조정 가능" -->
                        </div>
                    </div>
                    <p class="txt">
                        평균 {{ user.average_score }}점 ({{user.count_review}})
                    </p>
                </div>
                <div class="info-txt" v-text="user.introduce"></div>
            </div>

            <div class="other-party-review-wrap">
                <div class="sub-title">거래 후기</div>
                <div class="other-party-review-list">
                    <div class="other-party-review-item" v-for="review in reviews.data" :key="review.id">
                        <div class="review-top col-group">
                            <p class="name">{{ review.user.name.slice(0,1) + "OO" }}</p>
                            <div class="review-star-wrap star-5">
                                <div class="review-star review-star-off"></div>
                                <div class="review-star review-star-on" :style="`width:${review.user.average_score / 5 * 100}%;;`">
                                    <!-- style="width: 00% 로 별점 조정 가능" -->
                                </div>
                            </div>
                        </div>
                        <p class="txt">{{review.description}}</p>
                        <p class="date">
                            {{ review.created_at }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "../utils/Form";
export default {
    props: ["target_user_id"],

    data(){
        return {
            form : new Form(this.$axios, {

            }),

            user: null,

            reviews: {
                data: [],
            }
        }
    },
    methods: {
        getUser(){
            this.$axios.get("/api/users/" + this.target_user_id)
                .then(response => {
                this.user = response.data.data;
            });
        },

        getReviews(){
            this.$axios.get("/api/reviews", {
                params: {
                    target_user_id : this.target_user_id
                }
            }).then(response => {
                this.reviews = response.data;
            });
        },

        close(){
            this.$emit("close");
        }
    },

    computed: {

    },

    mounted() {
        this.getReviews();

        this.getUser();
    }
}
</script>