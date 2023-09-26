# crea-public

The Crea Orkest front end.

# Graphql

The graphql endpoint(s) that we use are proxied by Apollo Studio so that we have one endpoint and the possebility to add multiple sub graphs.

## getting the newest schema

To fetch the newest schema file you have to authenticate with Apollo Studio, this can be done with the Rover CLI. Run `rover config auth`, or set an `$APOLLO_KEY` env variable to a valid Apollo Studio API key.

Admin rights can be acquired through Thijs van Diessen.
