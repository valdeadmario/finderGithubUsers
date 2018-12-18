class Github {
    constructor() {
        this.client_id = 'fbfad2adbec4a4f5662d';
        this.client_secret = '2b62c3a5c0a9c89ff33214a26376e9d25714f071';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getProfile(name) {
        const profileResp = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResp = await fetch(`https://api.github.com/users/${name}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResp.json();
        const repos = await repoResp.json();

        return {
            profile,
            repos
        }
    }

}