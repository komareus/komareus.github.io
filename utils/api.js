const contentBranch = 'master';
const githubName = 'komareus';
const repositorySiteName = 'komareus.github.io';
const repositoryAdminName = 'investor182_admin';
const listServerItems = `https://api.github.com/repos/${githubName}/${repositoryAdminName}/contents/content`;
// const serverContentItems = `https://raw.githubusercontent.com/${githubName}/${repositoryAdminName}/${contentBranch}/content`;
const serverContentItems = `https://api.github.com/repos/${githubName}/${repositoryAdminName}/contents/content`;

const serverImageContentItems = `https://raw.githubusercontent.com/${githubName}/${repositoryAdminName}/${contentBranch}`;
// const serverImageContentItems = `https://github.com/${githubName}/${repositoryAdminName}/raw/master/content/`;
const adminUrl = 'https://investor182.netlify.com/'

const news = {
  newsIndexList: listServerItems + '/news',
  newsItem(name) {
    return `${serverContentItems}/news/${name}.json`
  }
}

const documents = {
  indexList(chapter) {
    return `${listServerItems}/documents/${chapter}`
  },
  documentItem({ chapter, item }) {
    return `${serverContentItems}/documents/${chapter}/${item}.json`
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
  documents,
  warnings,
  githubName,
  repositorySiteName,
  repositoryAdminName,
  serverImageContentItems,
  contentBranch,
  adminUrl,
  listServerItems,
  serverContentItems
}
