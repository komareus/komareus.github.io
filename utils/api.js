const contentBranch = 'master';
const githubName = 'komareus';
const repositorySiteName = 'komareus.github.io';
const repositoryAdminName = 'investor182_admin';
const listServerItems = `https://api.github.com/repos/${githubName}/${repositoryAdminName}/contents/content`;
const serverContentItems = `https://raw.githubusercontent.com/${githubName}/${repositoryAdminName}/${contentBranch}/content`;
const serverImageContentItems = `https://raw.githubusercontent.com/${githubName}/${repositoryAdminName}/${contentBranch}`;
const adminUrl = 'https://investor182.netlify.com/admin/'

const news = {
  newsIndexList: listServerItems + '/news',
  newsItem(name) {
    return `${serverContentItems}/news/${name}.json`
  }
}

const warnings = {
  indexList: listServerItems + '/warnings',
  item(name) {
    return `${serverContentItems}/warnings/${name}.json`
  }
}

export default {
  news,
  warnings,
  githubName,
  repositorySiteName,
  repositoryAdminName,
  serverImageContentItems,
  contentBranch,
  adminUrl
}
