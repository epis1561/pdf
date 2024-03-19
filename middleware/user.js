export default function ({store,route, redirect, next}) {
    if(!store.state.auth.user) {
        // store.commit("setModals", ["login"]);
        redirect("/login");

        store.commit("setIntendedUrl", route.fullPath);

        next(false);
    }
}