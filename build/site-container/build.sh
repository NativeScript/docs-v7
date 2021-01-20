#!/bin/bash
set -e

VER=${Version:-`cd docs && git describe --abbrev=0 && cd ..`}
DOCKER_IMAGE_URL=${DOCKER_IMAGE_URL:-"default-ns-docs"}

echo "Start building docker image $DOCKER_IMAGE_URL (v$VER)"

echo ">>> site-container (v$VER) > build.sh > step 1"
docker build -t ns-docs-build:$VER docs/build
echo ">>> site-container (v$VER) > build.sh > step 2"
docker run --rm -v $(pwd):/root --entrypoint "/bin/bash" -t ns-docs-build:$VER -c "/root/docs/build/build-docs.sh SKIP_SITEMAP_GENERATOR_REMOVAL && cp /root/docs/build/>>> site-container (v$VER)/Dockerfile /root/docs/build/bin"
echo ">>> site-container (v$VER) > build.sh > step 3"
docker run --rm -v $(pwd):/root --entrypoint "/bin/bash" -t ns-docs-build:$VER -c "rm -rf ~/.npm ~/.bundle"
echo ">>> site-container (v$VER) > build.sh > step 4"
docker rmi ns-docs-build:$VER

# echo ">>> site-container (v$VER) > build.sh > step 5"
# docker build -t $DOCKER_IMAGE_URL docs/build/bin

echo ">>> site-container (v$VER) > build.sh > done"
# docker push $DOCKER_IMAGE_URL
# docker rmi $DOCKER_IMAGE_URL
