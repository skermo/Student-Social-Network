package com.ptfunze.thesis.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseEmitterService {
    void addSseEmitter(SseEmitter sseEmitter);
    <T> void notify(T element, String eventName);
}