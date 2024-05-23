export default function ({store,route, redirect, next}) {

    if(!store.state.auth.user || (store.state.auth.user.data && !store.state.auth.user.data.provider)) {
        redirect("/provider/login");

        store.commit("setIntendedUrl", route.fullPath);

        next(false);
    }
}