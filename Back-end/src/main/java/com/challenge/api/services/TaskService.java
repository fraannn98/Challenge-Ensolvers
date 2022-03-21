package com.challenge.api.services;

import java.util.List;

import com.challenge.api.dto.TaskRequestDto;
import com.challenge.api.exceptions.AlreadyExistsException;
import com.challenge.api.exceptions.NotFoundException;
import com.challenge.api.models.Task;

public interface ITaskService {
    List<Task> getAll();
    List<Task> getAllByFolderId(Integer id) throws NotFoundException;
    Task getById(Integer idTask) throws NotFoundException;
    Task addTask(Task task) throws AlreadyExistsException;
    void removeTask(Integer idTask) throws NotFoundException;
    void updateTask(Task updatedTask) throws NotFoundException;
}