class Github {
    constructor() {
        this.client_id = 'fbfad2adbec4a4f5662d';
        this.client_secret = '2b62c3a5c0a9c89ff33214a26376e9d25714f071';
    }

    async getProfile(name) {
        const profileResp = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResp.json();

        return {
            profile
        }
    }

}