const { KubeConfig } = require('@kubernetes/client-node');

const kc = new KubeConfig();
kc.loadFromDefault();

module.exports = {
    kc,
};