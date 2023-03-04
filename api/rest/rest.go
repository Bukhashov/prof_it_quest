package rest

import (
	"fmt"
	"github.com/gin-gonic/gin"

	"github.com/Bukhashov/prof_it_quest/pkg/logging"
	"github.com/Bukhashov/prof_it_quest/config"
)

type Rest interface {
	Run()
}

type rest struct {
	cfg 			*configs.Config
	logger 			*logging.Logger
}

func (r *rest) Run() {
	router := gin.Default();

	userHandler := user.NewUser(r.client, r.cfg, r.logger)
	
	v1 := router.Group("/api/v1"); {
		authPath := v1.Group("/auth"); {
			authPath.POST("/singup", userHandler.Singup)
			authPath.POST("/singin", userHandler.Singin)
			authPath.POST("/delete", userHandler.Delete)
		}
	}

	err := router.Run(fmt.Sprintf(":%s", r.cfg.Lesten.Port)); if err != nil {
        panic("[Error] failed to start Gin server due to: " + err.Error())
	}
}

func NewRest(cfg *configs.Config, logger *logging.Logger) Rest{
	return &rest{
		cfg: cfg,
		logger: logger,
	}
}