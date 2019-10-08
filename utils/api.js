const contentBranch = 'master';
const repositoryName = 'komareus';
const listServerItems = `https://api.github.com/repos/${repositoryName}/${repositoryName}.github.io/contents/content`;
const serverContentItems = `https://raw.githubusercontent.com/${repositoryName}/${repositoryName}.github.io/${contentBranch}/content`;

const news = {
  newsIndexList: listServerItems + '/news',
  newsItem(name) {
    return `${serverContentItems}/news/${name}.json`
  }
}

export default {
  news,
  repositoryName,
  contentBranch
}
