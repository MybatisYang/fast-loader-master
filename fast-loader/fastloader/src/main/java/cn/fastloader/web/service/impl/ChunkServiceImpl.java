package cn.fastloader.web.service.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.fastloader.util.SnowflakeIdWorker;
import cn.fastloader.web.dao.TChunkInfoMapper;
import cn.fastloader.web.model.TChunkInfo;
import cn.fastloader.web.service.ChunkService;

@Service
public class ChunkServiceImpl implements ChunkService {

	@Resource
	TChunkInfoMapper tChunkInfoMapper;
	
    @Override
    public int saveChunk(TChunkInfo chunk) {
    	chunk.setId(SnowflakeIdWorker.getUUID()+SnowflakeIdWorker.getUUID());
    	return tChunkInfoMapper.insertSelective(chunk);
    }

    @Override
    public ArrayList<Integer> checkChunk(TChunkInfo chunk) {
    	return tChunkInfoMapper.selectChunkNumbers(chunk);
    }

	@Override
	public boolean checkChunk(String identifier, Integer chunkNumber) {
		return false;
	}

}
