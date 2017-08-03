# .buildkite/buildkite-test.sh

set -e

n 4.7.2 && rm -rf ./node_modules && npm i && npm t && \
n 6.9.4 && rm -rf ./node_modules && npm i && npm t && \
n 8.2.1 && rm -rf ./node_modules && npm i && npm t
