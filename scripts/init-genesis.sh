docker run -d --rm \
  -v ${PWD}/data:/data \
  -v ${PWD}/genesis.json:/genesis.json \
ethereum/client-go \
  init --datadir data /genesis.json
