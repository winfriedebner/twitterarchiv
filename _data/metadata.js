let data = {
	username: "winfried_ebner", // No leading @ here
	homeLabel: "winfried-ebner.de",
	homeUrl: "https://winfried-ebner.de/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
