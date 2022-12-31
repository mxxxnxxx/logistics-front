install:
	@make build
	@make up
up:
	docker compose up -d
build:
	docker compose build
remake:
	@make destroy
	@make install
stop:
	docker compose stop
down:
	docker compose down --remove-orphans
down-v:
	docker compose down --remove-orphans --volumes
restart:
	@make down
	@make up
destroy:
	docker compose down --rmi all --volumes --remove-orphans
ps:
	docker compose ps
logs:
	docker compose logs
logs-watch:
	docker compose logs --follow
log-frontend:
	docker compose logs frontend
log-frontend-watch:
	docker compose logs --follow frontend
frontend:
	docker compose exec frontend bash
