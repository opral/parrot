const fs = require('fs');

const pluginId = "1205803482754362456";


async function main() {

    let publishRequest = await fetch("https://www.figma.com/api/plugins/"+pluginId+"/versions");
    console.log(publishRequest)
    let json = await publishRequest.json();

    const currentVersion = json.meta.plugin.versions[json.meta.plugin.current_plugin_version_id].version;
    console.log(currentVersion)
    
    fs.writeFileSync('./current-version.json', JSON.stringify({currentVersion: currentVersion}), 'utf-8');
    fs.writeFileSync('./all-versions.json', JSON.stringify(json.meta.plugin.versions), 'utf-8');
}

main();
