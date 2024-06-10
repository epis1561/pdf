export const state = () => ({
    domain : process.env.NODE_ENV === "production" ? "https://api.esgi.or.kr" : "http://localhost",
    pop: null,
    modals: [],
    intendedUrl: "",
    price: null,


    instagram_client_id: "1662125527296137",
    instagram_client_secret: "bc1ff483f107b2f837e5555a940a54b7",
    push_token: null,
    language: "ko",
    translation: null,
    loading: false,

    banners: {
        data: []
    },

    categories: {
        data: []
    },

    basic: null,

    coords: {
        lat: "37.5179681611717",
        lon: "127.047059839521",
    },

    viewIntro: false,
    activePopVerifyIp: false,
})

export const mutations = {
  /*setToken (state) {
    state.token = state;
  },*/

    setIntendedUrl (state, data){
        state.intendedUrl = data
    },
    setPop (state, data){
        state.pop = data;
    },

    setModals (state, data) {
        state.modals = data;
    },

    setPushToken (state, data){
        state.push_token = data;
    },

    setCoords (state, data){
        state.coords = data;
    },

    setLoading(state, data){
        state.loading = data;
    },

    setBanners(state, data){
        state.banners = data;
    },

    setBasic(state, data){
        state.basic = data;
    },

    setCategories(state, data){
        state.categories = data;
    },

    setViewIntro(state, data) {
        state.viewIntro = data;
    },

    setActivePopVerifyIp(state, data){
        state.activePopVerifyIp = data;
    }

}

export const actions = {
    async getCoords({commit}) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lat = position.coords.latitude || "37.5179681611717";
                    let lon = position.coords.longitude || "127.047059839521";

                    commit("setCoords", {lat,lon});
                },
                (error) => {
                    console.error(error.message);
                }
            );
        }
    },

    async getCategories({commit}) {
        this.$axios.get("/api/admin/categories", {})
            .then(response => {
                console.log(response.data);
                commit("setCategories", response.data);
            })
    },

}

