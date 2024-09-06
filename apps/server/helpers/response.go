package helpers

import (
	"encoding/json"
	"net/http"
)

func SuccessResponse(w http.ResponseWriter, data interface{}) interface{} {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	return json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "success",
		"data":    &data,
	})
}

func BadRequest(w http.ResponseWriter, data interface{}) interface{} {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)
	return json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "data validation failed",
		"data":    &data,
	})
}

func InternalServerError(w http.ResponseWriter, data interface{}) interface{} {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusInternalServerError)
	return json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "internal server error",
		"data":    &data,
	})
}
