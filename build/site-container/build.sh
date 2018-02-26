#!/bin/bash
set -e

VER=${Version:-`cd docs && git describe --abbrev=0 && cd ..`}
DOCKER_IMAGE_URL=${DOCKER_IMAGE_URL:-"default-ns-docs"}

echo "Start building docker image $DOCKER_IMAGE_URL"

docker build -t ns-docs-build:$VER docs/build
docker run --rm -v $(pwd):/root --entrypoint "/bin/bash" -t ns-docs-build:$VER -c "/root/docs/build/build-docs.sh SKIP_SITEMAP_GENERATOR_REMOVAL && cp /root/docs/build/site-container/Dockerfile /root/docs/build/bin"
docker run --rm -v $(pwd):/root --entrypoint "/bin/bash" -t ns-docs-build:$VER -c "rm -rf ~/.npm ~/.bundle"
docker rmi ns-docs-build:$VER

docker build -t $DOCKER_IMAGE_URL docs/build/bin
docker push $DOCKER_IMAGE_URL
docker rmi $DOCKER_IMAGE_URL