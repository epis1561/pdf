import $ from 'jquery';

export default function ({ $axios, redirect, store, app }) {
    $axios.onRequest((config) => {
        // 원하는 언어 값을 설정합니다. 예를 들어, "en"을 사용합니다.
        // config.headers.common['Language'] = store.state.language;
    });

    $axios.onResponse(response => {
        store.commit("setLoading", false);
    });

    $axios.onError(error => {
        store.commit("setLoading", false);

        // store.commit("setFlash", error.message);

        if(error.response.status == 401) {
            app.$auth.setUser(null);
            app.$auth.setUserToken(null);

            if(app.$auth.user) {
                app.$auth.logout();
            }

            return store.commit("setPop", {
                title: "로그인 필요",
                description: "로그인 후 이용해주세요."
            });
        }


        if(error.response.status == 422)
            return store.commit("setPop", {
                title: "확인필요",
                description: "입력값을 확인해주세요."
            });

        if(error.response.status == 403 && error.response.data && error.response.data.message)
            return store.commit("setPop", {
                title: "확인필요",
                description: error.response.data.message
            });
        /*
               if(error.response.data && error.response.data.message)
                   return store.commit("setPop", {
                       title: "확인필요",
                       description: error.response.data.message
                   });
                */
    })
}
